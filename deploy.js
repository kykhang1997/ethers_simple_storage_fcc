const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
	// compile them in our code
	// compile them separately
	// http://127.0.0.1:7545
	const provider = new ethers.JsonRpcProvider('http://0.0.0.0:7545');
	const wallet = new ethers.Wallet(
		'0xcb1ab399c5fa54c3ccc2e0ae703e1b23096e950d639ea558d2fdc83f9cdd34bb',
		provider
	);
	const abi = fs.readFileSync(
		'./SimpleStorage_sol_SimpleStorage.abi',
		'utf8'
	);
	const binary = fs.readFileSync(
		'./SimpleStorage_sol_SimpleStorage.bin',
		'utf8'
	);

	const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
	console.log('Deploying, please waiting ....');

	const contract = await contractFactory.deploy();
	console.log(contract);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log('error', error);
		process.exit(1);
	});
