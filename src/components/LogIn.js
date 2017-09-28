import React from 'react';

const LogIn = (props) => {

	// onsubmit={}

	handleSubmit = () => {
		//props.callback(some info from form)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>username</label>
			<input type="text"/>
			<label>password</label>
			<input type="password"/>
		</form>
	);
}