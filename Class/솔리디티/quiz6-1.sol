// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract quiz1 {
    event Info(uint num);
    uint  public num;
   
    constructor(uint _num){
        num = _num;
    }
    function changeNum(uint _num) public {
        num = _num;
        emit Info(num);
    }
}