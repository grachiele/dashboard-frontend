import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {

	const articleItems = props.articles.map(function(article) {
		return (
			<NewsItem key={article.title} article={article}/>
		);
	})
	
	return (
		<ul className="right floated right aligned six wide column">
			<h2>This is the NewsList component</h2>
			{articleItems}
		</ul>
	);


}

export default NewsList;
