# MYTT NFT

Mynt NFT - Minting NFTs for startups.

## About

Simple architecture for minting NFTs on the Optimism (Polygon) mainnet. This project allows founders to create tokenized NFTs representing their startups.

## What is MYTT?

MYTT is a tool that enables startups to issue NFT-representations of their companies. In the late summer of 2021, NFTS were the hot topic, and I wanted to get my hands dirty minting and trading NFTs myself.

## Tech stack

- Native Blockchain - Polygon (Polygon Mainnet)
- Development Framework - Hardhat
- RPC Provider - Alchemy
- Standard - ERC721 (OpenZeppelin) - Deployed to Polygon mainnet
- Metadata - IPFS for persistent storage

## Dependencies

- Hardhat
- Ethers
- OpenZeppelin contracts
- Alchemy Web3

## Getting Started

Install dependencies:

```bash
npm install
```

Create a .env file with your credentials:

```bash
API_URL=your_replace_this_alchemy_api_url
MATIC_ALCHEMY_ADDRESS=your_received_alchemy_address
ARB1TOMONE=your_private_key_here

SETEB_DEVELOPMENT=matic
```

## Deploying to Mainnet

Run the deployment script:

```bash
npx hardhat run scripts/deploy-script.js
```

This will deploy the NFT contract to Polygon mainnet.

## Minting NFTs

After deployment, you can mint NFTs:

```bash
npx hardhat run scripts/mint-script.js
```

This will mint any amount of NFTs to the specified recipient address.

## Contract

The MYTT contract (see contracts/NFT.sol) is an ERC721 compliant that supports: 

- Minting new Tokens
- Storing token URIs
- Only owner can mint
- Referencing the OpenZeppelin template.

## MetadataStorage

The project uses IPFS for persistent metadata storage. Each NFT has metadata including:
- Name
- Description
- Image (URI)
- Attributes (e.g. Tier, Category)

Example metadata files are included:

- metadata_gold.json (Gold tier)
- metadata_silver.json (Silver tier)
- metadata_platinum.json (Platinum tier)

## Polygon Benefits

Polygon was chosen as the deployment target for this project due to:
- Little to no gas fees - Polygon has lower gas fees than Ethereum mainnet
- Fast confirmation times - block time is approximately 2 seconds
- Scalability - everything works on a test network before got main
- Alchemy Infrastructure - Ethereum-compatible small gas fees

## License
	It is subject to the MIT License.
