import Images from '../../models/Image';

export default {
	Query: {
		async getImages() {
			return await Images.find();
		},
		async getImage(_, { _id }) {
			return await Images.findById(_id);
		}
	},
	Mutation: {
		async uploadImage(_, { input }) {
			const newImage = new Images(input);
			await newImage.save();
			return newImage;
		},
		async deleteImage(_, { _id }) {
			return await Images.findByIdAndDelete(_id);
		}
	}
};
