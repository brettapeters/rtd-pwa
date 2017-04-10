
import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const Message = props => {
	return (
		<ListItem
			leftAvatar={<Avatar src="http://placekitten.com/28/28" />}
		>
			{props.message}
		</ListItem>
	);
}

export default Message;