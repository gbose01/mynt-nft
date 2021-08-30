require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});