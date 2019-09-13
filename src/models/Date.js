import { Schema, model } from 'mongoose';

const dateSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	start_date: {
		type: String,
		required: true
	},
	end_date: {
		type: String,
		required: true
	},
	classname: {
		type: String,
		default: 'Amarillo'
	},
	comments: [
		{
			body: String,
			username: String,
			createdAt: String
		}
	],
	pacient: {
		type: Schema.Types.ObjectId,
		ref: 'pacients'
	},
	images: {
		type: [],
		default: []
	},
	description: String,
	editable: {
		type: Boolean,
		default: 1
	},
	allday: {
		type: Boolean,
		default: 0
	},
	createdAt: {
		type: String,
		required: true
	},
	user: {
		type: String,
		required: true
	}
});

export default model('Dates', dateSchema);
