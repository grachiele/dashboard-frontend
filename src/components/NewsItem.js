import React from 'react';
import { Feed } from 'semantic-ui-react';


const NewsItem = (props) => {


	return (
		<Feed.Event>
			<Feed.Label image={props.article.thumbnail_standard}/>
			<Feed.Content>
				<Feed.Summary><a href={props.article.url}>{props.article.title}</a></Feed.Summary>
			</Feed.Content>
		</Feed.Event>
	);
}

export default NewsItem;
