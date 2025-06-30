//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract counter {
    function get() public view returns (uint256){
        return count;
    }
    //Function to get the current count
    funtion inc() public {
        count+=1;
    }
    function dec() public{
        count-=1;
    }
}