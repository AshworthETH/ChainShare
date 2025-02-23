# ChainShare

A decentralized file sharing platform built on blockchain technology.

## Overview

ChainShare allows users to securely share files using IPFS for storage and Ethereum blockchain for access control and file metadata management.

## Features Status

- [x] Web3 wallet integration (MetaMask)
- [x] File upload interface with drag & drop
- [x] Smart contract for file metadata storage
- [x] Responsive UI with Tailwind CSS
- [ ] IPFS integration for file storage
- [ ] File listing and management
- [ ] Access control and sharing
- [ ] Encrypted file sharing

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Blockchain**: Ethereum, Solidity, Hardhat
- **Storage**: IPFS
- **Web3**: web3.js

## Getting Started

### Prerequisites
- Node.js 18+
- MetaMask browser extension

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Smart Contract

The FileShare contract handles file metadata storage and access control on the Ethereum blockchain. Deploy using Hardhat:

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

## Development Status

This is an active development project implementing core blockchain file sharing functionality. Currently includes wallet connection, file upload UI, and smart contract foundation.

## License

MIT