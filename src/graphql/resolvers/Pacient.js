import Pacients from '../../models/Pacient';

export default {
	Query: {
		async pacients() {
			return await Pacients.find();
		},
		async getPacient(_, { _id }) {
			return await Pacients.findById(_id);
		}
	},
	Mutation: {
		async createPacient(_, { input }) {
			const newPacient = new Pacients(input);
			await newPacient.save();
			return newPacient;
		},
		async updatePacient(_, { _id, input }) {
			return await Pacients.findByIdAndUpdate(_id, input, { new: true });
		},
		async deletePacient(_, { _id }) {
			return await Pacients.findByIdAndDelete(_id);
		}
	}
};
