import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { FaCopy } from 'react-icons/fa';
import background from './stock/background.png';
import './style/App.css';
import './index.css';
import ContractABI from './constant/contractAbi.json';
// import axios from 'axios';

function App() {
  const textToCopy = 'pip install -i https://test.pypi.org/simple/ fedle';
  const tagline = "We Aim to Build Go to Library for training DL Models through Decentralized Computing";

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [web3, setWeb3] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [data, setData] = useState("");

  // function getData() {
  //   const instance = axios.create({
  //     baseURL: "https://github.com/login/oauth/authorize?client_id=340a1cea603c168283e3&scope=public_repo",
  //   });
  //   const fetchData = async () => {
  //     try {
  //       const response = await instance.get('/'); 
  //       console.log(response);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }
  //   fetchData();
  // }

  const handleContractCalls = async () => {
    try {
      const contract = new web3.eth.Contract(ContractABI, "0x6c26A5E0bC8459451f5Cc065514117aCDae492cd");
      const res = contract.methods.addPossibleContributors(walletAddress, "47a54d7").encodeABI();
      const gas = await web3.eth.estimateGas({
        to: "0x6c26A5E0bC8459451f5Cc065514117aCDae492cd",
        from: walletAddress,
        res,
      });
      const nonce = await web3.eth.getTransactionCount(walletAddress);
      const tx = {
        from: walletAddress,
        to: "0x6c26A5E0bC8459451f5Cc065514117aCDae492cd",
        gas,
        res,
        nonce,
      };
      console.log(tx);

      // Send the transaction
      const receipt = await web3.eth.sendTransaction(tx);
      console.log('Transaction Receipt:', receipt);
    } catch (error) {
      console.error('Error calling contract methods:', error);
    }
  };


  useEffect(() => {
    let currentIndex = 0;
    const taglineLength = tagline.length;


    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Fetch the current wallet address when the component mounts
      web3Instance.eth.getAccounts()
        .then((accounts) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        })
        .catch((error) => {
          console.error('Error fetching wallet address:', error);
        });
    }

    const typingInterval = setInterval(() => {
      if (currentIndex < taglineLength) {
        setTypedText(tagline.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [tagline]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Command copied to clipboard!');
    });
  };

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        alert('Connected to Metamask!');
      }
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
      alert('Failed to connect to Metamask. Please make sure Metamask is installed and unlocked.');
    }
  };

  // Function to render the abbreviated wallet address
  const renderAbbreviatedWallet = (address) => {
    if (address) {
      const firstFive = address.slice(0, 5);
      const lastFour = address.slice(-4);
      return `${firstFive}...${lastFour}`;
    }
    return null;
  };

  return (
    <div>
      <div className='welcome'>
        <h1 className='hero'>FEdLE</h1>
        <h2>
          {typedText}
          {showCursor && <span className='cursor'></span>}
        </h2>
        <div className='wallet-button'>
          {walletAddress ? (
            <div>
              <button className='connect-btn' title={walletAddress} onMouseOver={() => setWalletAddress(walletAddress)} onMouseOut={() => setWalletAddress(renderAbbreviatedWallet(walletAddress))}>
                {renderAbbreviatedWallet(walletAddress)}
              </button>
            </div>
          ) : (
            <button className='connect-btn' onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
        <p>
          The following project is a proof-of-concept of the original idea of building a decentralised DL models training platform. As our first step in the product building, we've for now built a library & a simply beautiful UI to reedeem the rewards you earn while helping us out to build this library further!
        </p>
        <p>
          Fedle, an open-source python library for federated learning. With the increasing use of deep-learning models in the industry & academia nowadays, developers are feeling the frustration of long & unwanted large training times. Traditional models like CNN, KNN, and MLP on large datasets like the CIFAR-10 often require lengthy training times and frequent accuracy improvements. Waiting for models to become usable can be frustrating and inefficient.
        </p>
        <p>
          You can simply install the library using the following command:
        </p>
        <div className='terminal'>
          {textToCopy}
          <FaCopy className='copy-icon' onClick={() =>copyToClipboard(textToCopy)} />
        </div>
        <p>
          And some Dependencies:
        </p>
        <div className='terminal'>
          poetry install
          <FaCopy className='copy-icon' onClick={() =>copyToClipboard("poetry install")} />
        </div>
        <p>Some more:</p>
        <div className='terminal'>
        poetry shell
          <FaCopy className='copy-icon' onClick={() =>copyToClipboard("poetry shell")} />
        </div>
        <p>Just one more: </p>
        <div className='terminal'>
        pip install -r requirements.txt
          <FaCopy className='copy-icon' onClick={() =>copyToClipboard("pip install -r requirements.txt")} />
        </div>
        <p>Finnaly Run the setup script: </p>
        <div className='terminal'>
        python test.py install
          <FaCopy className='copy-icon' onClick={() =>copyToClipboard("python test.py install")} />
        </div>
        <img className='background' alt="background" src={background} />
        <img className='background2' alt="background" src={background} />
        <img className='background3' alt="background" src={background} />
      </div>
      <button className='bounty-btn' onClick={handleContractCalls}> <a href='https://github.com/login/oauth/authorize?client_id=340a1cea603c168283e3&scope=public_repo'>Claim Bounty</a></button>
    </div>
  );
}

export default App;
