import mongoose from 'mongoose';

export async function connect() {
	const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log(`>>>DB is connected!<<<`);
	} catch (e) {
		console.log(`¡Something goes wrong!`);
		console.log(e);
	}
}
