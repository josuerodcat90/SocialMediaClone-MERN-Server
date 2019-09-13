import { Schema, model } from 'mongoose';

const pacientSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	dob: Date,
	phonenumber: {
		type: String,
		required: true
	},
	email: String,
	dates: {
		type: [],
		default: []
	},
	images: {
		type: [],
		default: []
	},
	status: {
		type: Number,
		required: true,
		default: 1
	}
});

export default model('Pacients', pacientSchema);
