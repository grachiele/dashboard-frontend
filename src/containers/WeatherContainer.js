import React from 'react';
import WeatherItem from '../components/WeatherItem'


class WeatherContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			weather: []
		}
	}

	

	componentDidMount() {
		fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zipcode}&APPID=1b3292d8476ca73faee1a365e843fbb1`)
			.then((resp) => {
				return resp.json()
			})
			.then((respJSON) => {				
				this.setState({
					weather: respJSON.main
				})
			})
	}

	render() {
		return (
			<div className="six wide column">
				<p>this is the WeatherContainer</p>
				<WeatherItem weather={this.state.weather}/>
			</div>
		);
	}

}

export default WeatherContainer;