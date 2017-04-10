import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

export default class MessageList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [
				"Hello World",
				"This is another message"
			]
		};
	}

	render() {
		const messageNodes = this.state.messages.map(message => {
			return <Message message={message} />;
		});

		return (
			<Card>
				<List>
					{messageNodes}
				</List>
			</Card>
		)
	}
}