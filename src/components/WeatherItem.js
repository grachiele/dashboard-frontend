import React from 'react';
import { Container , Card, Feed } from 'semantic-ui-react';


const WeatherItem = (props) => {

	const kelvinToFahrenheit = (degreesK) => {
		let degreesF = ((degreesK - 273.15) * 1.8) + 32;
		return degreesF.toFixed(2);
	}


	return (
		<Feed.Event>
			<Feed.Content>
				<Feed.Summary>
					It is {kelvinToFahrenheit(props.weather.temp)} degrees
				</Feed.Summary>
			</Feed.Content>
		</Feed.Event>

	);
}

export default WeatherItem;