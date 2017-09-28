import React from 'react';

const NewsItem = (props) => {


	return (
		<li>{props.article.title}</li>
	);
}

export default NewsItem;