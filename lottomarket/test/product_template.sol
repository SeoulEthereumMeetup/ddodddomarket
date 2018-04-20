pragma solidity ^0.4.16;
contract Product {

    uint256 public totalSupply;
    string public productName;

    event Sold(string userId, uint256 amount);
    event SoldOut();
    
    function Product(uint256 _totalSupply, string _productName) {
        totalSupply = _totalSupply;
        productName = _productName;
    }
    
    function getAmount() returns (uint256 amount){
        return totalSupply;
    }
    
    function getName() returns (uint256 productName){
        return productName;
    }
    
    function buy(string userId, uint256 amount) {
        if(totalSupply - amount < 0) {
            throw;    
        }
        
        totalSupply = totalSupply - amount;
        Sold(userId, amount);
        
        if(totalSupply == 0) {
            SoldOut();
        }
    }
    
    function putAmount(uint256 amount) {
        totalSupply = totalSupply + amount;
    }
    
    function removeAmount(uint256 amount) {
        totalSupply = totalSupply - amount;
    }
}