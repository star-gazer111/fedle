// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor () ERC20 ("HF_LAND", "SVM") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Mint 1,000,000 tokens to the contract deployer
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
// deployed at address --> 0xfed02b46ba769e703c8edb114568486aa09c4ddf
// check it out at etherscan.io --> https://sepolia.etherscan.io/tx/0x0bbb55737e78f40efb6c61a9d403bd852051266f5f46230cfe8926bc2a6dd57a