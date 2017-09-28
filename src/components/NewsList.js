import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
	
	return (
		<div>
		<h2>This is the NewsList component</h2>
		<NewsItem />
		<NewsItem />
		</div>
	);


}

export default NewsList;
