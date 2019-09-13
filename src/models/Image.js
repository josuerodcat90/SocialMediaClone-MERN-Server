import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	size: {
		type: String,
		required: true
	},
	id_pac: {
		type: String,
		required: true
	},
	id_dat: {
		type: String,
		required: true
	},
	fullroute: {
		type: String,
		required: true
	}
});

export default model('Images', imageSchema);
