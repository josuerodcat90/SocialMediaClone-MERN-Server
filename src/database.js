import mongoose from 'mongoose';

export const connect = async () => {
	const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dentalcareclinic';
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log(`>>>Cloud DB is connected!<<<`);
	} catch (e) {
		console.log(`¡Something goes wrong!`);
		console.log(e);
	}
};
