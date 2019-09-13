import React from 'react';
import { Grid, Card, Divider } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import 'moment/locale/es';
import moment from 'moment';

import DateFeed from '../components/DateFeeds';

function Home() {
	const {
		loading,
		data: { dates }
	} = useQuery(dates_query);

	const fecha = moment().format('dddd, DD [ de ] MMM');

	return (
		<Grid columns={3}>
			<Grid.Row>
				<Grid.Column>
					<Card fluid>
						<Card.Content className='card-title'>
							<p>Componente contador de citas de hoy</p>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column>
					<Card fluid>
						<Card.Content className='card-title'>
							<p>Componente contador pacientes registrados</p>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column>
					<Card fluid>
						<Card.Content className='card-title'>
							<p>Componente contador de citas para el mes actual</p>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid.Row>
			<Divider />
			<Grid.Row>
				<Grid.Column>
					<Card style={{ width: '100%', height: '50%' }}>
						<Card.Content>
							<Card.Header className='card-title'>
								<h4>Citas pendientes para hoy {fecha}</h4>
							</Card.Header>
						</Card.Content>
						<Card.Content style={{ overflow: 'scroll' }}>
							{loading ? (
								<h1>Loading Dates...</h1>
							) : (
								dates && dates.map(date => <DateFeed date={date} />)
							)}
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column>
					<Card style={{ width: '100%' }}>
						<Card.Content>
							<Card.Header className='card-title'>
								<h4>Aqui ira la agenda de pacientes</h4>
							</Card.Header>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column>
					<Card style={{ width: '100%' }}>
						<Card.Content>
							<Card.Header className='card-title'>
								<h4>Aqui ira el calendario mensual</h4>
							</Card.Header>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

const dates_query = gql`
	{
		dates {
			_id
			title
			start_date
			end_date
			user
			description
			createdAt
		}
	}
`;

export default Home;
