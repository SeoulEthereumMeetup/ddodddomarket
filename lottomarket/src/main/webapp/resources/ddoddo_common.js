var userStore_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userId",
				"type": "string"
			},
			{
				"name": "_userName",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_userId",
				"type": "string"
			}
		],
		"name": "getUserName",
		"outputs": [
			{
				"name": "_userName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];


var productStore_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productAddress",
				"type": "address"
			}
		],
		"name": "getProductSalePrice",
		"outputs": [
			{
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productAddress",
				"type": "address"
			},
			{
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "registerProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "productPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var purchaseStore_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userId",
				"type": "string"
			},
			{
				"name": "_productAddress",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "savePurchase",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.0.64:8540'));

var ownerpk = "4058d677aebca00797a8ba53a5417f9012d2037389d513ce830e557b8be2af02";

var userStore 		= web3.eth.contract(userStore_abi).at('0xf93a99ac705b47804427b9f311d175d81c15b4de');
var productStore 	= web3.eth.contract(productStore_abi).at('0x1e0beb19096e450d7e9d5e7505183c162ae48bb5');
var purchaseStore 	= web3.eth.contract(purchaseStore_abi).at('0x1e0beb19096e450d7e9d5e7505183c162ae48bb5');


