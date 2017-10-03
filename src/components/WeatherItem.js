import React from 'react';

const WeatherItem = (props) => {

	const kelvinToFahrenheit = (degreesK) => {
		let degreesF = ((degreesK - 273.15) * 1.8) + 32;
		return degreesF.toFixed(2);
	}


	return (
		<div>
			<p>It is {kelvinToFahrenheit(props.weather.temp)} degrees</p>
		</div>
	);
}

export default WeatherItem;