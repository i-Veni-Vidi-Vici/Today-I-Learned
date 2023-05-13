// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract quiz1 {
    mapping(address => string) name;

    function addName(address key, string memory val) public {
        name[key]= val;
    }
    function getName(address key) public view returns(string memory){
        return name[key];
    }
    function deleteName(address key) public {
       delete(name[key]);
    }
}