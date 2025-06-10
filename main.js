const express = require("express");
const app = express();
const fs = require("fs");
const utils = require("./utils");
const blockchainUtils = require("./blockchain_utils");
const { createDeflate } = require("zlib");
const { serialize } = require("v8");
require("dotenv").config();


if (!fs.existsSync("./database/database.db")) {
  var db = utils.initializeDatabase();
} else {
  var db = utils.databaseConnection();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (req, res) {
  const records = (await blockchainUtils.smokeShieldContract.getRecords())

  console.log("Records: ", records)

  res.json({ hello: "hello world", });
});

// Users route =================================================================================
app.post("/login", function (req, res) {
  console.log(`Requesting for user ${req.body.username}`);

  try {
    const user = db
      .prepare("SELECT * FROM users WHERE username = ? AND password = ?")
      .get(req.body.username, req.body.password);

    if (user) {
      console.log(`User ${req.body.username} is found. Logging in ...`);
      res.status(200).json(user);
    } else {
      console.log(`User ${req.body.username} is not found.`);
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json(`Failed to login: ${error.mesage}`);
  }
});

app.post("/sign-up", function (req, res) {
  console.log(
    `Signing up with username ${req.body.username} and password ${req.body.password}`
  );

  try {
    const user = db
      .prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)")
      .run(req.body.username, req.body.email, req.body.password);

    if (user) {
      console.log(`Successfully create account: username ${req.body.username}`);
      res.status(200);
    }
  } catch (error) {
    console.error(
      `Failed to sign up with username ${req.body.username} and password ${req.body.password}`
    );
    res.status(500).json({ message: "Failed to sign up" });
  }
});

// Records route ===============================================================================

app.get("/records", async function (req, res) {
  console.log("Requesting all records from smart contract located at: ", process.env.CONTRACT_ADDRESS);

  try {
    console.log("Fetching records from smart contract located at: ", process.env.CONTRACT_ADDRESS)
    const records = (await blockchainUtils.smokeShieldContract.getRecords()).map(record => {
      return {
        id: utils.serializeBigInt(record[0]),
        product: record[1],
        customerAge: utils.serializeBigInt(record[2]),
        customerName: record[3],
        ic: record[4],
        retailer: record[5],
        datePurchase: utils.unixToJsTime(record[6]),
        createdAt: utils.unixToJsTime(record[7])
      }
    })

    res.status(200).json(records)
  } catch (error) {
    console.log(`Failed to get all records: ${error.message}`);
    res.status(500).json({ message: "Failed to get all records" });
  }
});

app.get("/record/:id", function (req, res) {
  console.log(`Requesting record id ${req.params.id}`);

  try {
    const record = db
      .prepare("SELECT * FROM records WHERE id = ?")
      .get(req.params.id);

    if (record) res.status(200).json(record);
    else res.status(404).json({ message: "Record not found" });
  } catch (error) {
    console.log(`Failed to fetch record id ${req.params.id}`);
    res
      .status(500)
      .json({ message: `Failed to fetch record id ${req.params.id}` });
  }
});

app.post("/record", async (req, res) => {
  try {
    const { product, customerAge, retailer, ic, datePurchase, customerName } = req.body;

    // convert to bigNumber DT
    const convertedDatePurchase = utils.dateToBigNumber(datePurchase)

    console.log("Creating record in blockchain...")
    const tx = await blockchainUtils.smokeShieldContract.createRecord(product, customerAge, customerName, ic, retailer, convertedDatePurchase, convertedDatePurchase,
      {
        gasLimit: 500000
      });
    await tx.wait();
    console.log("Finish transaction for creating record")

    blockchainUtils.smokeShieldContract.on("RecordCreated", (recordId, product, customer_age, customer_name, ic, retailer, date_purchase, created_at) => {
      console.log(`Record created:
        ID: ${recordId}
        Product: ${product}
        Customer Age: ${customer_age}
        Customer Name: ${customer_name}
        IC: ${ic}
        Retailer: ${retailer}
        Date of Purchase: ${date_purchase}
        Created At: ${created_at}`);
    })

    res.status(200).json({ message: "Successfully create record" })
  } catch (error) {
    console.error("Failed to create record: ", error.message)
    res.status(500).json({ message: "Failed to create record: ", details: error.message })
  }
})

// Cigarette routes ==================================================
app.get("/cigarette", async function (req, res) {
  const cigaretteId = req.query.id;

  try {
    console.log(`Fetching cigarrette id ${cigaretteId}`);
    const cigarette = await blockchainUtils.smokeShieldContract.getCigaretteById(cigaretteId);
    const desCigarette = {
      id: utils.serializeBigInt(cigarette[0]),
      name: cigarette[1],
      factory: cigarette[2],
      manufacturedDate: utils.unixToJsTime(cigarette[3])
    }

    console.log("Deserializing fetched cigarrete: ", desCigarette)

    if (cigarette) {
      res.status(200).json(desCigarette);
    } else res.status(404).json({ message: `Cigarette id ${cigaretteId} not found` });
  } catch (error) {
    console.error(`Failed to fetch cigarette id ${cigaretteId}: ${error.message}`);
    res
      .status(500)
      .json({ message: `Failed to fetch cigarette id ${cigaretteId}` });
  }
});

// Age verification route ==========================================
app.post("/verify-age", async function (req, res) {
  const LEGAL_AGE = 18;

  try {
    const { id, product, customerAge, retailer, ic, datePurchase, customerName, cigaretteId } = req.body;

    console.log(`Verifying age... IC: ${ic} name ${customerName}`);
    const age = utils.determineAge(ic);
    console.log(`Customer age is ${age}`);

    if (age < LEGAL_AGE) {
      res.status(200).json({ result: "illegal", customerAge: age });
    } else {
      res.status(200).json({ result: "legal", customerAge: age });
    }
  } catch (error) {
    console.error(`Failed to verify age: ${error.message}`);
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is runnings on ${process.env.LOCAL_DOMAIN}:${process.env.PORT}`
  );
});
