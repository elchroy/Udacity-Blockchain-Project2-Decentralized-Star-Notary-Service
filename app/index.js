const Web3 = require('web3');
let url = '';
// url = 'ws://localhost:9545';
// url = 'http://localhost:7545';
url = 'https://rinkeby.infura.io/v3/39dfbcc347a446c3829b65934a6c9625';
// url = 'http://127.0.0.1:9545';
const web3 = new Web3(url)
web3.eth.getChainId().then(function(chainId){
	console.log(chainId);
});
