import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'typeface-roboto';

import { Home, Login, Register } from './pages';
import NavBar from './components/AppBar';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
	return (
		<Router>
			<NavBar />
			<Container>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</Container>
		</Router>
	);
}

export default App;
