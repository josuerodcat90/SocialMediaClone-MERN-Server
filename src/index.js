import app from './app';
import { connect } from './database';

async function main() {
	await app.listen(app.get('PORT'));
	console.log(`>>>Server on Port ${app.get('PORT')}!<<<`);
	connect();
}

main();
