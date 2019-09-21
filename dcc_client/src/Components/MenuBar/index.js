import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MenuBar() {
	const pathname = window.location.pathname;
	const path = pathname === '/' ? 'inicio' : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu pointing inverted borderless color='black' size='large' fixed='top'>
			<Menu.Item
				name='inicio'
				active={activeItem === 'inicio'}
				onClick={handleItemClick}
				icon='home'
				as={Link}
				to='/'
			/>
			<Menu.Item
				name='pacientes'
				active={activeItem === 'pacientes'}
				onClick={handleItemClick}
				icon='users'
				as={Link}
				to='/pacientes'
			/>
			<Menu.Item
				name='calendario'
				active={activeItem === 'calendario'}
				onClick={handleItemClick}
				icon='calendar alternate outline'
				as={Link}
				to='/calendario'
			/>
			<Menu.Item
				name='usuarios'
				active={activeItem === 'usuarios'}
				onClick={handleItemClick}
				icon='user circle'
				as={Link}
				to='/usuarios'
			/>
			<Menu.Menu position='right'>
				<Menu.Item
					name='login'
					active={activeItem === 'login'}
					onClick={handleItemClick}
					icon='sign-out alternate'
					as={Link}
					to='/login'
				/>
				<Menu.Item
					name='registro'
					active={activeItem === 'registro'}
					onClick={handleItemClick}
					icon='registered outline'
					as={Link}
					to='/registro'
				/>
			</Menu.Menu>
		</Menu>
	);
}

export default MenuBar;
