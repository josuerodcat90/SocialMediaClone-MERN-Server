import React from 'react';
import { Grid, Card, Feed, Icon } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import 'moment/locale/es';
import moment from 'moment';

import DateFeed from '../../components/DateFeed';

function Home() {
	let dates = {};
	const { loading, data } = useQuery(dates_query);

	if (data) {
		dates = { data: data.getDates };
	}

	const fecha = moment().format('dddd, DD [ de ] MMM');

	return (
		<Grid columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					<Card fluid>
						<Card.Content className='card-title' color='blue'>
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
			<Grid.Row>
				<Grid.Column className='column-content'>
					<Card style={{ width: '100%', height: '90%' }}>
						<Card.Content>
							<Card.Header className='card-title'>
								<h4>Citas pendientes para hoy {fecha}</h4>
							</Card.Header>
						</Card.Content>
						<Card.Content style={{ overflow: 'scroll' }}>
							{loading ? (
								<h1>
									Loading Dates <Icon loading name='spinner' />
									...
								</h1>
							) : (
								dates.data &&
								dates.data.map(date => (
									<Feed key={date._id}>
										<DateFeed date={date} />
									</Feed>
								))
							)}
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column className='column-content'>
					<Card style={{ width: '100%', height: '90%' }} fluid>
						<Card.Content>
							<Card.Header className='card-title'>
								<h4>Aqui ira la agenda de pacientes</h4>
							</Card.Header>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column className='column-content'>
					<Card style={{ width: '100%', height: '90%' }} fluid>
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
	query {
		getDates {
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
