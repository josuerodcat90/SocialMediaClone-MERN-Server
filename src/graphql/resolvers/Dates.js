import Dates from '../../models/Date';
import checkAuth from '../../util/chekauth';
import 'moment/locale/es';
import moment from 'moment';

export default {
	Query: {
		async dates() {
			try {
				const dates = await Dates.find().sort({ start_date: 1 });
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

			const newDate = new Dates({
				title,
				start_date: moment(start_date).format('YYYY-MM-DDTHH:mm'),
				end_date: moment(end_date).format('YYYY-MM-DDTHH:mm'),
				description,
				classname,
				pacient,
				user: user.username,
				createdAt: moment().format('YYYY-MM-DDTHH:mm:ss')
			});

			const date = await newDate.save();

			return date;
		},
		async updateDate(_, { _id, input }) {
			return await Dates.findByIdAndUpdate(_id, input, { new: true });
		},
		async deleteDate(_, { _id }) {
			return await Dates.findByIdAndDelete(_id);
		}
	},
	Date: {
		commentCount(parent) {
			return parent.comments.length;
		},
		imageCount(parent) {
			return parent.images.length;
		}
	}
};
