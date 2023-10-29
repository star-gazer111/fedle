// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Reward {
    address[] public contributors;
    IERC20 public SVMtoken;

    constructor(address _SVMtokenAddress) {
        SVMtoken = IERC20(_SVMtokenAddress);
    }

    function add_contributors(address new_contributor) public {
        contributors.push(new_contributor);
        SVMtoken.transfer(new_contributor,50);
    }

    function get_contributors() public view returns(address[] memory) {
        return contributors;
    }
}

// deployed at address --> 0xdDF8910F1C27f5EB01DA9ADeac2D1502565426e0
// check it out at etherscan.io --> https://sepolia.etherscan.io/tx/0x9516ccc08c3dc12c38a7648eacbbd17c37f8d22ffe90ca449151c73d1a6d3cc7