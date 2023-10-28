import React, {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import styles from "./index.module.css";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0); 


  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const vidbg = "/static/videos/vidbg.mp4";

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    getATMContract();
  }

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async () => {
    if (atm) {
      try {
        const balance = await atm.getBalance();
        setBalance(balance.toNumber());
      } catch (error) {
        console.error("Error getting balance:", error);
      }
    }
  }

  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait()
      getBalance();
    }
  }

  const withdraw = async() => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait()
      getBalance();
    }
  }

  const lock = async () => {
    if (atm) {
      let tx = await atm.lock({ gasLimit: 200000 });
      await tx.wait();
    }
  }
  
  const unlock = async () => {
    if (atm) {
      let tx = await atm.unlock({ gasLimit: 200000 });
      await tx.wait();
    }
  }
  
  const transfer = async (recipientAddress, amount) => {
    if (atm) {
      if (!ethers.utils.isAddress(recipientAddress)) {
        alert("Invalid recipient address. Please use a valid Ethereum address.");
        return;
      }

      let tx = await atm.transfer(recipientAddress, amount);
      await tx.wait();
      getBalance();
    }
  }
  

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return (
      <div className={styles.centercontent}>
      <button onClick={connectAccount}>Connect your Metamask wallet</button>
      <br></br>
      </div>
      );
    }

    if (balance == undefined) {
      getBalance();
    }

//TO ANOTHER FILE FOR CODE MANAGEMENT (SOMEWHAT)

return (
  <main className={styles.container}>
    <div className={styles.centercontent}>
      <p>Your Account: {account}</p>
      <p>Your Balance: {balance}</p>
      <button onClick={deposit}>Deposit 1 ETH</button>
      <button onClick={withdraw}>Withdraw 1 ETH</button>
      <button onClick={lock}>Lock</button>
      <button onClick={unlock}>Unlock</button>
      <button onClick={() => transfer("0xRecipientAddress", 1)}>Transfer 1 ETH</button>
      <br></br>
    </div>
  </main>
);
};

useEffect(() => {
getWallet();
}, []);

return (
  <div className={styles.main}>
    <div className={styles.video}>
      <video autoPlay loop muted id="video">
        <source src="https://drive.google.com/u/0/uc?id=119NfkikqPmOqxnR4WjHdoWyR8HWCoycY&export=download#.mp4" type="video/mp4"/>
      </video>
    </div>
      <div className="headers">
        <h1 className="h1">Welcome to my Dapp</h1>
        <p className="p">Hello! Before performing any transaction, ensure that your wallet is connected.</p>
        {initUser()}
      </div>
  </div>
);
}