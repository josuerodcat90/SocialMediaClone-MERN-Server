import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'moment/locale/es';
import moment from 'moment';

function PostCard({ date: { _id, title, start_date, end_date } }) {
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
		<div>
			<Card fluid>
				<Card.Content>
					<Image
						floated='right'
						size='mini'
						src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
					/>
					<Card.Header as={Link} to={`/dates/${_id}`}>
						{title}
					</Card.Header>
					<Card.Meta>
						Comienza en:{' '}
						{moment(start_date)
							.startOf()
							.fromNow(true)}
					</Card.Meta>
					<Card.Meta>Duración: {duration()}</Card.Meta>
				</Card.Content>
				<Card.Content extra>
					<Button.Group>
						<Button animated='fade' positive floated='left'>
							<Button.Content hidden content='Guardar' />
							<Button.Content visible>
								<Icon name='save' />
							</Button.Content>
						</Button>
						<Button.Or text='o' />
						<Button animated='fade' negative floated='right'>
							<Button.Content hidden content='Eliminar' />
							<Button.Content visible>
								<Icon name='trash' />
							</Button.Content>
						</Button>
					</Button.Group>
				</Card.Content>
			</Card>
		</div>
	);
}

export default PostCard;
