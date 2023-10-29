// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SVMToken is ERC20, Ownable {
    constructor() ERC20("fedle", "SVM") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Mint 1,000,000 tokens to the contract deployer
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

// deployed at --> 0xcD86F1AFA9afAB9e9eFB2DD667da19f01f5A7B7c
// etherscan.io link --> https://sepolia.etherscan.io/tx/0x4ebe2e1854ffe9c50f2e6d1c5baffffc194c92d4f8a8cae1b4d1e798f37eb878