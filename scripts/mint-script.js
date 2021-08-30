const hre = require("hardhat");
require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;


async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmejCbRNUuH436crCBKxPkakP47t2dp3kZHESAwmcVYcre";
  const WALLET_ADDRESS = PUBLIC_KEY;
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

