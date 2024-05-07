// SPDX-License-Identifier: GNU AFFERO GENERAL PUBLIC LICENSE Version 3
// We fund freedom.
// We stop state criminals.
// We make crypto cypherpunk again.
// We love Geo Caching with Geo Cash.
// We foster Freedom, Justice and Peace.
// We combine Freedom Education with Geo Caching.
// We foster sustainable liquidity infrastructures.
// We separate money from state criminals like religion has been separated from state.
// We foster ever emerging architectures of freedom by rewarding those who help themselves and others to be free.

pragma solidity 0.8.19;
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.9.4/contracts/token/ERC20/ERC20.sol";
contract Friede is ERC20 {
    error CheckInput();
    constructor() ERC20("Friede", "FRIEDE") {
        _mint(msg.sender, 9000000000 * 10 ** decimals()); 
    }
    function distribute(uint256 amountPerWallet, address[] memory receivers) public {
        if (IERC20(address(this)).allowance(msg.sender, address(this)) < (receivers.length * amountPerWallet)) {
            revert CheckInput();
        } 
        for (uint256 i = 0; i < receivers.length; i++) {
            IERC20(address(this)).transferFrom(msg.sender, receivers[i], amountPerWallet);
        }
    }
}
