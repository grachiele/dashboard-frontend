import React from 'react';
import { Segment, Input, Button, Form } from 'semantic-ui-react';


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
		this.props.logInUser({username: this.state.username, password: this.state.password})
		this.setState({
			username: "",
			password: ""
		})

	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
				    <label>Username</label>
				    <input type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder='Username' />
				</Form.Field>
				<Form.Field>
				    <label>Password</label>
				    <input type="password" onChange={this.handlePasswordChange} value={this.state.password} placeholder='Password' />
				</Form.Field>			
				<Input value="Sign In" type="submit" />
			</Form>
		);
	}
}

export default LogIn
