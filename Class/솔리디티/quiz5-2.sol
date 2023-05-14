// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract quiz2 {
    uint[] number;
    function addNumbers(uint val) public {
        number.push(val);
    }
    function getNumbers(uint index) public view returns(uint){
        return number[index];
    }
    function deleteNumbers() public {
        number.pop();
    }
    }