const tables = require("./database/tables");
const seeders = require("./database/seeders");
const sqlite3 = require("better-sqlite3");
const { ethers } = require("ethers")

function databaseConnection() {
  const db = new sqlite3("./database/database.db");

  return db;
}

function initializeDatabase() {
  // create database
  const db = databaseConnection();

  // create tables
  const createUsers = db.prepare(tables.usersTable);
  const createRecords = db.prepare(tables.recordsTable);
  const createCigarettes = db.prepare(tables.cigarattesTable);
  createUsers.run();
  createRecords.run();
  createCigarettes.run();

  // create users
  const insertUser1 = db.prepare(seeders.createUserStmt);
  insertUser1.run(
    seeders.user1.username,
    seeders.user1.email,
    seeders.user1.password
  );

  const insertUser2 = db.prepare(seeders.createUserStmt);
  insertUser2.run(
    seeders.user2.username,
    seeders.user2.email,
    seeders.user2.password
  );

  // create records
  const insertRecords = db.prepare(seeders.createRecordsStmt);
  seeders.recordSeeders.forEach((record) => {
    insertRecords.run(
      record.id,
      record.dateTime,
      record.product,
      record.customerAge,
      record.customer_name,
      record.ic,
      record.retailer,
      record.date_purchase,
      record.created_at
    );
  });

  // create cigarette
  const insertCigarettes = db.prepare(seeders.createCigaretteStmt);
  seeders.cigarettesSeeder.forEach((cigarette) => {
    insertCigarettes.run(
      cigarette.id,
      cigarette.name,
      cigarette.manufactured_date,
      cigarette.factory
    );
  });

  // return database connection
  return db;
}

function determineAge(icNumber) {
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(icNumber.slice(0, 2)) + 2000;
  const age = currentYear - birthYear;

  return age;
}

function dateToBigNumber(date) {
  const unixTimestamp = Math.floor(new Date(date).getTime() / 1000); // Convert to seconds
  return BigInt(unixTimestamp)
}

function serializeBigInt(bigIntVal) {
  return Number(bigIntVal)
}

function unixToJsTime(unixTime) {
  const time = serializeBigInt(unixTime)
  return new Date(time * 1000);
}


module.exports = {
  initializeDatabase,
  databaseConnection,
  determineAge,
  dateToBigNumber,
  serializeBigInt,
  unixToJsTime
};
