// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract quiz3{

    struct Market{
        string itemName;
        int price;
    }
    Market[] openMarket;

    function sell(string memory _itemName, int _price) public {
        openMarket.push(Market(_itemName, _price));
    }
    function search(string memory _itemName) public view returns (int){
        for(uint i=0; i<openMarket.length; i++){
            if(keccak256(bytes(openMarket[i].itemName))==keccak256(bytes(_itemName)))
                return  openMarket[i].price;
        }
        return 0;

    }

}