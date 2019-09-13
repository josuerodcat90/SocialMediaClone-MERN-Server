import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import 'moment/locale/es';
import moment from 'moment';

import PostCard from '../components/PostCard';

function Home() {
	const {
		loading,
		data: { dates }
	} = useQuery(dates_query);

	const fecha = moment().format('dddd, DD [ de ] MMM');

	return (
		<Grid columns={3} stretched>
			<Grid.Row>
				<h1>Citas pendientes para hoy {fecha}</h1>
			</Grid.Row>
			<Grid.Row container spacing={2}>
				{loading ? (
					<h1>Loading Dates...</h1>
				) : (
					dates &&
					dates.map(date => (
						<Grid.Column item xs={4} key={date._id} style={{ marginBottom: 20 }}>
							<PostCard date={date} />
						</Grid.Column>
					))
				)}
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
