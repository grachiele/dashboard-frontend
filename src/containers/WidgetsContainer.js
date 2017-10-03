import React from 'react';
import NewsListContainer from './NewsListContainer';
import WeatherContainer from './WeatherContainer';
import { Container } from 'semantic-ui-react'

class WidgetsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		if (this.props.user) {
			return (
				<Container>
					{this.props.user.news ? <NewsListContainer />: null}
		        	{this.props.user.weather ? <WeatherContainer zipcode={this.props.user.zipcode} />: null}
		        </Container>);
		} else {
			return null; 
		}

		
	}
}

export default WidgetsContainer;