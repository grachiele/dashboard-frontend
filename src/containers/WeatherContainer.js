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
		// fetch 
		// api.openweathermap.org/data/2.5/weather?zip=11249&APPID=1b3292d8476ca73faee1a365e843fbb1
		// APPID=1b3292d8476ca73faee1a365e843fbb1
		// replace zip with user's zip
		fetch('https://api.openweathermap.org/data/2.5/weather?zip=11249&APPID=1b3292d8476ca73faee1a365e843fbb1')
			.then((resp) => {
				// console.log("resp", resp);
				// console.log("resp.json()", resp.json());
				return resp.json()
			})
			.then((respJSON) => {
				console.log('in second then')
				console.log(respJSON.main)
				
				this.setState({
					weather: respJSON.main
				})

			})
	}

	render() {
		return (
			<div>
				<p>this is the WeatherContainer</p>
				<WeatherItem weather={this.state.weather}/>
			</div>
		);
	}

}

export default WeatherContainer;