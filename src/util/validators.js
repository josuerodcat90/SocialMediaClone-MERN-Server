///email regEx: "/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/"

module.exports.validateUserRegisterInput = (firstname, lastname, username, password) => {
	const errors = {};
	if (username.trim() === '') {
		errors.username = 'Username field must not be empty';
	}
	if (firstname.trim() === '') {
		errors.firstname = 'Firstname field must not be empty';
	}
	if (lastname.trim() === '') {
		errors.lastname = 'Lastname field must not be empty';
	}
	if (password === '') {
		errors.password = 'Password field must not be empty';
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1
	};
};

module.exports.validateLoginInput = (username, password) => {
	const errors = {};
	if (username.trim() === '') {
		errors.username = 'Username field must not be empty';
	}
	if (password === '') {
		errors.password = 'Password field must not be empty';
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1
	};
};
