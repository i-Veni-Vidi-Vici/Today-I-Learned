// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract quiz2{
    uint result= 0;
    function sum() public returns (uint){
        for(uint i=1; i<11; i++){
            result+=i;
        }
        return  result;
    }
}