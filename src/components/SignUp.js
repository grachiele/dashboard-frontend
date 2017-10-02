import React from 'react';

class SignUp extends React.Component {

	constructor(){
		super();

		this.state = {
			username: "",
			password: "",
			password_confirm: "",
			zipcode: "",
			weather: false,
			news: false
		}
	}


	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	handlePasswordConfirmationChange = (event) => {
		this.setState({
			password_confirm: event.target.value
		})
	}

	// handle zipcode
	handleZipCodeChange = (event) => {
		this.setState({
			zipcode: event.target.value
		})
	}


	// handle weather
	handleWeatherChange = (event) => {
		this.setState({
			weather: !this.state.weather
		})
	}

	// handle news
	handleNewsChange = (event) => {
		this.setState({
			news: !this.state.news
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.signUpUser({
			username: this.state.username,
			password: this.state.password,
			zipcode: this.state.zipcode,
			weather: this.state.weather,
			news: this.state.news
		})
		this.setState({
			username: "",
			password: "",
			password_confirm: "",
			zipcode: "",
			weather: false,
			news: false
		})

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
				<label>Password</label>
				<input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
				<label>Password Confirmation</label>
				<input type="password" onChange={this.handlePasswordConfirmationChange} value={this.state.password_confirm}/>
				<label>Zipcode</label>
				<input type="number" onChange={this.handleZipCodeChange} value={this.state.zipcode}/>
				<input id="news" type="checkbox" onChange={this.handleNewsChange} value={this.state.news} />
				<label>News</label>
				<input id="weather" type="checkbox" onChange={this.handleWeatherChange} value={this.state.weather} />
				<label>Weather</label>
				<input type="submit"/>
			</form>
		);
	}
}

export default SignUp
