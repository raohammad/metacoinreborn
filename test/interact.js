

Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
web3 = new Web3(new Web3.providers.HttpProvider("http://18.220.108.238:8547"));

var myContract = new web3.eth.Contract([
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sendCoin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "sufficient",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalanceInEth",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ], '0xf9aBF864481D149aBeb014f6bE9366494aa73622', {
    from: '0xB054F9F022082402b064415F75b106b37C5A4B34', // default from address
    gasPrice: 200000000 // default gas price in wei, 20 gwei in this case
});

myContract.methods.sendCoin('0x58CeC12b7Fc409F3B3c145076AA8eC9039A49974',10).send({}, function(err, result){
        console.log(err);
        console.log(result);
})

web3.eth.personal.unlockAccount('0xB054F9F022082402b064415F75b106b37C5A4B34', '').then(function(resp) {
    console.log(resp);
});

//TRANSFER
web3.eth.sendTransaction({
    from: '0x8Ab7114Ba0F7CA706AF69F799588766c8426aa24',
    to: '0x893C3F80D2a0375b3f00F856cf8A6775E4EFC26A',
    value: '100000000'
}).then(function(receipt) {
    console.log(receipt);
});

var accounts=[];

web3.eth.getAccounts(function(error, result) {
  if(error != null)
      console.log("Couldn't get accounts");
      console.log(result); //logs all accounts
      accounts=result;
      //console.log(result[3]); //logs 3rd account
    });

web3.eth.personal.unlockAccount(accounts[0], '').then(function(resp) {
    console.log(resp);
});



/** Past Events*/

authSC.getPastEvents('eventName', {
    fromBlock: 0,
    toBlock: 'latest'
}).then(function(events) {
    events.forEach(function(ev) {
        console.log(ev);
    })
});