// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract quiz3{
    uint a = 10;
    uint result = 0;
    function sub() public  returns(uint){
        while(true){
        if(a ==5) break;
        result = result +a;
        a--; 
        }
        return result;
    }
}