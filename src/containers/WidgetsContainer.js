import React from 'react';
import NewsListContainer from './NewsListContainer';
import WeatherContainer from './WeatherContainer';
import RonSwansonContainer from './RonSwansonContainer'
import { Container } from 'semantic-ui-react'

class WidgetsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
		console.log("some random rmessage", this.props);
	}

	render() {
		console.log(this.props)
		if (this.props.user) {
			console.log("into widge container return thing")
			return (
				<Container>
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
