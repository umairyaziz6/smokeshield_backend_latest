const { ethers } = require("ethers");
require("dotenv").config();
const contractABI = require("./abi").default;

const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_PROVIDER);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const smokeShieldContract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  contractABI,
  wallet 
);

module.exports = {
  smokeShieldContract,

};
