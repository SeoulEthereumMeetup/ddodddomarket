
contract ProductStore {

    mapping (address => uint256) public productPrice;
   
    function registerProduct(address _productAddress, uint256 _salePrice) {
        productPrice[_productAddress] = _salePrice;
    }
    
    function getProductSalePrice(address _productAddress) constant returns (uint256 _salePrice) {
        return productPrice[_productAddress];
    }
}

contract ProductTemplate {

    uint256 public totalSupply;
    string public productName;

    event Sold(string userId, uint256 amount);
    event SoldOut();
    
    function ProductTemplate(uint256 _totalSupply, string _productName) {
        totalSupply = _totalSupply;
        productName = _productName;
    }
    
    function getAmount() constant returns (uint256 amount){
        return totalSupply;
    }
    
    function getName() constant returns (uint256 productName){
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

contract PurchaseStore {

    mapping (string => mapping (address => uint256)) purchaseList;
    // userid, product_address, amount 
    
    function savePurchase(string _userId, address _productAddress, uint256 _amount) {
        purchaseList[_userId][_productAddress] += _amount;
    }

}

contract UserStore {

    mapping (string => string) userList;
    
    function registerUser(string _userId, string _userName) {
        userList[_userId] = _userName;
    }
    
    function getUserName(string _userId) constant returns (string _userName) {
        return userList[_userId];
    }
    
}