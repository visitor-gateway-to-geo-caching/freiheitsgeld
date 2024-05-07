// SPDX-License-Identifier: GNU AFFERO GENERAL PUBLIC LICENSE Version 3

// We fund freedom.
// We stop state criminals.
// We make crypto cypherpunk again.
// We love Geo Caching with Geo Cash.
// We foster Freedom, Justice and Peace.
// We combine Crypto Education with Geo Caching.
// We foster sustainable liquidity infrastructures.
// We separate money from state criminals like religion has been separated from state.
// We foster ever emerging architectures of freedom by rewarding those who help themselves and others to be free.

pragma solidity 0.8.19;
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.9.4/contracts/token/ERC20/ERC20.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.9.4/contracts/utils/math/Math.sol";

contract GeoCash is ERC20 {

    uint256 public logEntryCounter = 0;

    mapping(uint256 => ITraceOfFreedom) public tracesOfFreedom; 
    mapping(uint256 => uint256) public logToCacheID; 

    struct ITraceOfFreedom {
        address from; 
        uint256 priority;
        string freedomMessage;
        uint256 refersTo;
    }
    
    error CheckInput();
    error TransferFailed();   
    error GeoCashRequired();

    constructor() ERC20("Geo Cash", "Geld") {
        _mint(msg.sender, 360000000 * 10 ** decimals()); 
    }
  
    function distributeMatic(uint256 amountPerWallet, address[] memory receivers) public payable {
        if ((amountPerWallet * receivers.length) != msg.value) { revert CheckInput(); }
        for (uint256 i = 0; i < receivers.length; i++) {
            (bool sent, ) = receivers[i].call{value: amountPerWallet}("Geo Cash");
            if (sent == false || amountPerWallet == 0) { revert TransferFailed(); }
        }
    }
    
    function distributeGeoCash(uint256 amountPerWallet, address[] memory receivers) public {
        if (IERC20(address(this)).allowance(msg.sender, address(this)) < (receivers.length * amountPerWallet)) {
            revert CheckInput();
        } 
        for (uint256 i = 0; i < receivers.length; i++) {
            IERC20(address(this)).transferFrom(msg.sender, receivers[i], amountPerWallet);
        }
    }

    function log(uint256 donationAmount, string memory freedomMessage, uint256 refersTo, bool newHideout) public {
        if (donationAmount == 0) { revert GeoCashRequired(); }
        if (newHideout && refersTo != 0) { revert CheckInput(); }
        tracesOfFreedom[logEntryCounter] = ITraceOfFreedom(msg.sender, donationAmount, freedomMessage, refersTo);
        IERC20(address(this)).transferFrom(msg.sender, tracesOfFreedom[refersTo].from, donationAmount);
        logEntryCounter++;
    }
}
