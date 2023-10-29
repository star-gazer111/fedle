// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Reward is Ownable {
    address[] public contributors;
    IERC20 public SVMtoken;
    address[] public PossibleContributors;
    uint256[] public commits;

    constructor(address _SVMtokenAddress) Ownable(msg.sender) {
        SVMtoken = IERC20(_SVMtokenAddress);
    }

    modifier checkAllowance(uint amount) {
        require(SVMtoken.allowance(msg.sender, address(this)) >= amount, "Error");
        _;
    }

    function addPossibleContributors(address newAddress,uint256 value) public {
        PossibleContributors.push(newAddress);
        commits.push(value);
    }

    function getPossibleContributors() public view returns (address[] memory,uint256[] memory) {
        return (PossibleContributors,commits);
    }

    function depositTokens(uint _amount) public checkAllowance(_amount) {
        SVMtoken.transferFrom(msg.sender, address(this), _amount);
    }

    function add_contributors(address new_contributor) public onlyOwner {
        contributors.push(new_contributor);
        SVMtoken.transfer(new_contributor, 50);
    }

    function get_contributors() public view returns(address[] memory) {
        return contributors;
    }

    function getSmartContractBalance() external view returns(uint) {
        return SVMtoken.balanceOf(address(this));
    }
}

// deployed at --> 0x6c26A5E0bC8459451f5Cc065514117aCDae492cd
// etherscan.io --> https://sepolia.etherscan.io/tx/0xa2a88b43c19fc2640fec2bde53496c6fcc8d7dda1cb3bdf2446ed27acbdf520b