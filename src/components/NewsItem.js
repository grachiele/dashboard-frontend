import React from 'react';
import { Feed } from 'semantic-ui-react';


const NewsItem = (props) => {


	return (
		<Feed.Event>
			<Feed.Content>
				<Feed.Summary>{props.article.title}</Feed.Summary>
			</Feed.Content>
		</Feed.Event> 
	);
}

export default NewsItem;