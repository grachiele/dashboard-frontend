import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {

	const articleItems = props.articles.map(function(article) {
		return (
			<NewsItem article={article}/>
		);
	})
	
	return (
		<ul>
			<h2>This is the NewsList component</h2>
			{articleItems}
		</ul>
	);


}

export default NewsList;
