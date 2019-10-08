import app from './app';
import { connect } from './database';

const main = async () => {
	await app.listen(app.get('PORT'));
	console.log(`>>>Server on Port ${app.get('PORT')}!<<<`);
	connect();
};

main();
