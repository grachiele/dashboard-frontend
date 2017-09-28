import React from 'react';

const SignUp = (props) => {

// props will contain a callback for a functuon that sends post request?
// onSubmit={props.callback}

	handleSubmit = () => {
		//props.callback(some info from form)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Username</label>
			<input type="text" />
			<label>Password</label>
			<input type="text" />
			<label>Password Confirmation</label>
			<input type="text" />
			<label>Zipcode</label>
			<input type="number" />
		</form>
	);

}