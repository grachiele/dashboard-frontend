import React from 'react';
import NewsItem from './NewsItem';
import { Card, Feed } from 'semantic-ui-react';

const NewsList = (props) => {

	const articleItems = props.articles.map(function(article) {
		return (
			<NewsItem key={article.title} article={article}/>
		);
	})
	
	return (
		<Card>
			<Card.Content>
				<Card.Header>This is the NewsList component</Card.Header>
			</Card.Content>
			<Card.Content>
				<Feed>{articleItems}</Feed>
			</Card.Content>
		</Card>
	);


}

export default NewsList;
