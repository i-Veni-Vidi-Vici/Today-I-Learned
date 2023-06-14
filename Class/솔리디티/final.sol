// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Pre1{

    address public  owner;
    mapping(address => bool) public addrList;
    event paidAddress(string text, address sender, uint256 payment);

    uint public counter =0;
    address[] public alist;


    modifier onlyOwner(){
        require(msg.sender == owner, "Ownable: call is not the owner");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    receive() external payable {
        require(msg.value ==10**15, "Must be 0.001 ether.");
        require(addrList[msg.sender]==false, "not again");
        
        counter++;
        addrList[msg.sender] =true;
        alist.push(msg.sender);
        if(counter ==3){
            //winner
            counter =0;
            (bool su,) = msg.sender.call{value:0.002 ether}("");
            require(su,"fail");
             emit paidAddress("winner", msg.sender, msg.value);

            for(uint i=0; i<alist.length; i++){
                delete(addrList[alist[i]]);
            }
             delete alist;
        } else{
            //loose
            emit paidAddress("looser", msg.sender, msg.value);
        }

       
    }
    function getbalance() public view onlyOwner() returns(uint256){
        return address(this).balance;
    }


}