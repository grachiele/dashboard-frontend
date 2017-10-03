import React from 'react';
import WeatherItem from '../components/WeatherItem';
import { Container , Card, Feed } from 'semantic-ui-react';


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
			<Card>
				<Card.Content>
					<Card.Header>Weather in your area:</Card.Header>
				</Card.Content>
				<Card.Content>
					<Feed><WeatherItem weather={this.state.weather}/></Feed>
				</Card.Content>
			</Card>
		);
	}

}

export default WeatherContainer;

