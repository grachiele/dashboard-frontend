import React from 'react';

class LogIn extends React.Component {

	constructor(){
		super()

		this.state = {
			username: "",
			password: ""
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handlePasswordChange = (event) =>{
		this.setState({
			password: event.target.value
		})
	}


	handleSubmit = (event) => {
		event.preventDefault()
		console.log("Something happened")
		console.log(this.state)
		//props.callback(some info from form)
		// log in user
		console.log(this.props)
		this.props.logInUser({username: this.state.username, password: this.state.password})

		this.setState({
			username: "",
			password: ""
		})

	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>username</label>
				<input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
				<label>password</label>
				<input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
				<input type="submit" />
			</form>
		);
	}
}

export default LogIn
