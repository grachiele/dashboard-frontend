
import React from 'react';
import NewsList from '../components/NewsList';

class NewsListContainer extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		// fetch
		// http://api.nytimes.com/svc/news/v3/content/all/all.json?limit=10
		// also need api key
	}

	render() {
		return (
			<div>
			<h1>This is the NewsListContainer</h1>
			<NewsList />
			</div>
		);
	}

}

export default NewsListContainer;