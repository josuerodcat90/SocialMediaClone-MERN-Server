import React from 'react';
import { Container, Typography } from '@material-ui/core';
import MenuDrawer from './Components/Drawer';

function App() {
	return (
		<MenuDrawer>
			<Container>
				<Typography variant='h1'>Hello World!</Typography>
			</Container>
		</MenuDrawer>
	);
}

export default App;
