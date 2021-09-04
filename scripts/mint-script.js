const hre = require("hardhat");
require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;


async function main() {
  for(let i = 0; i < 20; i++)
  {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    if(i<10)
    {
      var URI = "ipfs://QmXC1CZYiZ6EgAxmvtz3kkxEQsARgtWHkxz8rsguUDW7bS";
    }
    else if(i<30)
    {
      var URI = "ipfs://Qmczo4nsjsWk1onaDsPd7E5AHFQqXQ6aKmbUWJJMP2TnG5";
    }
    else if(i<100)
    {
      var URI = "ipfs://QmQykAQEmAWBra6LKotLE2NjZrjzzsfdeBXyrf74vanr5s";
    }
    const WALLET_ADDRESS = PUBLIC_KEY;
    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
  }
  
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

