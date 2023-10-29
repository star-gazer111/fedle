import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { FaCopy } from 'react-icons/fa';
import background from './stock/background.png';
import './style/App.css';
import './index.css';

function App() {
  const textToCopy = 'pip install -i https://test.pypi.org/simple/ fedle';
  const tagline = "We Aim to Build Go to Library for training DL Models through Decentralized Computing";

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [web3, setWeb3] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
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
              <button className='connect-btn'  title={walletAddress} onMouseOver={() => setWalletAddress(walletAddress)} onMouseOut={() => setWalletAddress(renderAbbreviatedWallet(walletAddress))}>
                {renderAbbreviatedWallet(walletAddress)}
              </button>
            </div>
          ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
        <div className='terminal'>
          {textToCopy}
          <FaCopy className='copy-icon' onClick={copyToClipboard} />
        </div>
        <img className='background' alt="background" src={background} />
      </div>
    </div>
  );
}

export default App;
