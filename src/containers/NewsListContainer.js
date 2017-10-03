
import React from 'react';
import NewsList from '../components/NewsList';
import { Container } from 'semantic-ui-react'

class NewsListContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		// fetch
		// http://api.nytimes.com/svc/news/v3/content/all/all.json?limit=10
		// also need api key
		// in req headers----> "api-key: 0c96e8ade59b43ec99a22a5cc69f86a2"

		fetch('http://api.nytimes.com/svc/news/v3/content/all/all.json?limit=10&api-key=0c96e8ade59b43ec99a22a5cc69f86a2')
			.then((resp) => {
				return resp.json();
			})
			.then((respJSON) => {
				this.setState({
					articles: respJSON.results
				});
			})
	}

	render() {
		return (
			<NewsList articles={this.state.articles} />
		);
	}

}

export default NewsListContainer;