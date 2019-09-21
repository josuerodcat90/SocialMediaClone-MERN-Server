import React from 'react';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'moment/locale/es';
import moment from 'moment';

function DateFeed({ date: { _id, title, start_date, end_date } }) {
	const start = moment(start_date);
	const end = moment(end_date);
	const timediff = moment.duration(end.diff(start));
	const time = timediff.asMinutes();

	const duration = function() {
		if (time < 60) {
			return timediff.asMinutes() + ' Minutos';
		} else if (time === 60) {
			return timediff.asHours() + ' Hora';
		} else if (time < 120) {
			return timediff.hours() + ' Hora y ' + timediff.minutes() + ' Minutos';
		} else {
			return timediff.hours() + ' Horas y ' + timediff.minutes() + ' Minutos';
		}
	};

	return (
		<Feed.Event>
			<Feed.Label icon='calendar' as={Link} to={`/dates/${_id}`} />
			<Feed.Content>
				<Feed.Date>
					Comienza en:{' '}
					{moment(start_date)
						.startOf()
						.fromNow(true)}
					{' -- '}
					Dura: {duration()}
				</Feed.Date>
				<Feed.Summary>{title}</Feed.Summary>
			</Feed.Content>
		</Feed.Event>
	);
}

export default DateFeed;
