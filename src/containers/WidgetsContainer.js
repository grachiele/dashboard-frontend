import React from 'react';
import NewsListContainer from './NewsListContainer';
import WeatherContainer from './WeatherContainer';
import RonSwansonContainer from './RonSwansonContainer'
import { Container, Card } from 'semantic-ui-react'

class WidgetsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		if (this.props.user) {
			return (
				<Card.Group>
					{this.props.user.news ? <NewsListContainer />: null}
		      {this.props.user.weather ? <WeatherContainer />: null}
					{this.props.user.quote ? <RonSwansonContainer />: null}
		     </Container>);
		} else {
			return null;
			// placeholder -- should be a redirect? or redirect earlier?
			// will have to be modified when we move over to routes ?
		}


	}
}

export default WidgetsContainer;
