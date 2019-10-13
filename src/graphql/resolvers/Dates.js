import Dates from '../../models/Date';
import checkAuth from '../../util/chekauth';
import 'moment/locale/es';
import moment from 'moment';
import { AuthenticationError, UserInputError } from 'apollo-server-core';

export default {
	Query: {
		async getDates() {
			try {
				const dates = await Dates.find().sort({ createdAt: -1 });
				return dates;
			} catch (err) {
				throw new Error(err);
			}
		},
		async getDate(_, { _id }) {
			try {
				const date = await Dates.findById(_id);
				if (!date) {
					throw new Error('Date not found!', Error);
				} else {
					return date;
				}
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		async createDate(
			_,
			{
				input: { title, start_date, end_date, description, classname, pacient }
			},
			context
		) {
			const user = checkAuth(context);

			if (title.trim() === '') {
				throw new Error('Post title field must not be empty');
			}
			if (start_date.trim() === '') {
				throw new Error('Post start date field must not be empty');
			}
			if (end_date.trim() === '') {
				throw new Error('Post end date field must not be empty');
			}
			if (description.trim() === '') {
				throw new Error('Post description field must not be empty');
			}
			if (classname.trim() === '') {
				throw new Error('Post class name field must not be empty');
			}
			if (pacient.trim() === '') {
				throw new Error('Post pacient field must not be empty');
			}

			const newDate = new Dates({
				title,
				start_date: moment(start_date).format('YYYY-MM-DDTHH:mm'),
				end_date: moment(end_date).format('YYYY-MM-DDTHH:mm'),
				description,
				classname,
				pacient,
				user: user.firstname + ' ' + user.lastname,
				createdAt: moment().format('YYYY-MM-DDTHH:mm:ss')
			});

			const date = await newDate.save();

			return date;
		},
		async updateDate(_, { _id, input }) {
			return await Dates.findByIdAndUpdate(_id, input, { new: true });
		},
		async deleteDate(_, { _id }, context) {
			const user = checkAuth(context);

			try {
				const date = await Dates.findById(_id);
				if (user.username === date.username) {
					await date.delete();
					return 'Date deleted succesfully';
				} else {
					throw new AuthenticationError('Action not allowed');
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		async likeDate(_, { _id }, context) {
			const { username } = checkAuth(context);

			const date = await Dates.findById(_id);
			if (date) {
				if (date.likes.find(like => like.username === username)) {
					/// date already likes, unlike it
					date.likes = date.likes.filter(like => like.username !== username);
				} else {
					/// Not liked, like date
					date.likes.push({
						username,
						createdAt: moment().format('YYYY-MM-DDTHH:mm:ss')
					});
				}

				await date.save();
				return date;
			} else throw new UserInputError('Post not found');
		}
	},
	Date: {
		commentCount: parent => parent.comments.length,
		imageCount: parent => parent.images.length,
		likeCount: parent => parent.likes.length
	}
};
