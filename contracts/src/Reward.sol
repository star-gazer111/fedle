// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Reward is Ownable {
    address[] public contributors;
    IERC20 public SVMtoken;

    constructor(address _SVMtokenAddress) Ownable(msg.sender) {
        SVMtoken = IERC20(_SVMtokenAddress);
    }

    modifier checkAllowance(uint amount) {
        require(SVMtoken.allowance(msg.sender, address(this)) >= amount, "Error");
        _;
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

// contract address --> 0x5ba32030ab045D2a0Ed376C27811A175c66e7274
// etherscan.io URL --> https://sepolia.etherscan.io/tx/0x5ba265437dd49c05e520149ebc345e0ede46d16c398d45dc16729840566ec85b