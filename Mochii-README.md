# Dapp Project Readme

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setting Up and Running the Project Locally](#setting-up-and-running-the-project-locally)
- [Metamask Wallet Integration](#metamask-wallet-integration)

## Introduction

This README provides information about a Dapp project and its associated code files. It covers the contents of the code files, how to set up and run the project locally, the required libraries, and how to create and connect a Metamask wallet for the project.

## Prerequisites

Before setting up and running the project, make sure you have the following prerequisites:

- Node.js
- npm (Node Package Manager)
- MetaMask extension installed in your web browser
- Ethereum account with some Ether (ETH) for testing purposes

## Project Structure

The project contains the following code files:

1. **Assessment.sol** - A Solidity smart contract named "Assessment" that includes various functions related to deposits, withdrawals, locking, unlocking, and transferring funds.

2. **index.module.css** - A CSS file to style the web interface of the Dapp.

3. **index.js** - The JavaScript file responsible for connecting to the Ethereum network, interacting with the smart contract, and handling user actions.

## Setting Up and Running the Project Locally

To set up and run the project locally, follow these steps:

# Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: 
  npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: 
  npx hardhat node
4. In the third terminal, type: 
  npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type 
  npm run dev to launch the front-end.
6. The project will be running on your localhost. Typically at http://localhost:3000/

## Metamask Wallet Integration

To interact with the project and its smart contract, you need to create and connect a Metamask wallet. Follow these steps to integrate Metamask with the Dapp:

1. If you don't have Metamask installed, download and install it as a browser extension.

2. Launch Metamask and set up your Ethereum account. Ensure your account is funded with some Ether for transactions.

3. Connect your Metamask wallet to the Dapp by clicking the "Connect Account" button in the Dapp's user interface.

4. Once connected, you can perform actions such as depositing, withdrawing, locking, unlocking, and transferring funds using the Dapp's interface.

Now, you have successfully set up the project, integrated Metamask, and can use the Dapp for Ethereum-based transactions.

Please note that this README provides an overview of the project and its setup. For more detailed information, refer to the code and documentation within the project files.
