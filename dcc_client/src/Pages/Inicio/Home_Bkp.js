import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, Icon } from 'semantic-ui-react';

import DateCard from '../../Components/DateFeed';

function Home() {
	const { loading, data: dates } = useQuery(dates_query);

	return (
		<Grid columns={3} divided>
			<Grid.Row>
				<h1>Dental Care Clinic - Inicio</h1>
			</Grid.Row>
			<Grid.Row>
				{loading ? (
					<h1>
						Loading Dates <Icon loading name='spinner' />
						...
					</h1>
				) : (
					dates &&
					dates.map(date => (
						<Grid.Column key={date.id}>
							<DateCard date={date} />
						</Grid.Column>
					))
				)}
			</Grid.Row>
		</Grid>
	);
}

const dates_query = gql`
	query {
		dates {
			_id
			title
			start_date
			end_date
			description
		}
	}
`;

export default Home;
