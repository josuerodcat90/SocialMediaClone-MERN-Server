import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	status: {
		type: Number,
		default: 1
	},
	range: {
		type: Number,
		default: 2
	},
	bachtitle: {
		type: String,
		default: 'fa fa-user'
	},
	usericon: {
		type: String,
		default: null
	},
	createdAt: {
		type: String,
		required: true
	}
});

export default model('Users', userSchema);
