import { ethers } from 'ethers';
import fs from 'fs-extra';
import 'dotenv/config';

async function main() {
	const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
	const encryptedKeyToJson = await wallet.encrypt(
		process.env.PRIVATE_KEY_PASSWORD!
	);
	fs.writeFileSync('./.encryptedKey.json', encryptedKeyToJson);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log('error', error);
		process.exit(1);
	});
