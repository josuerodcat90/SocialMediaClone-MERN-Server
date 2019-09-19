import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Menubar from './Components/MenuBar';
import Inicio from './Pages/Inicio';
import Pacientes from './Pages/Pacientes';
import Calendario from './Pages/Calendario';
import Usuarios from './Pages/Usuarios';
import Login from './Pages/Login';
import Registro from './Pages/Registro';

function App() {
	return (
		<Router>
			<Menubar />
			<Container>
				<Segment raised className='topNotch'>
					<Route exact path='/' component={Inicio} />
					<Route exact path='/pacientes' component={Pacientes} />
					<Route exact path='/calendario' component={Calendario} />
					<Route exact path='/usuarios' component={Usuarios} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/registro' component={Registro} />
				</Segment>
			</Container>
		</Router>
	);
}

export default App;
