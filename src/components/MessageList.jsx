import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

import * as firebase from 'firebase';

export default class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: {}
		};
	}

	componentDidMount() {
		const msgRef = firebase.database().ref('messages/');
		
		msgRef.on('child_added', msg => {
			if (this.state.messages[msg.key]) return;

			let msgVal = msg.val();
			msgVal.key = msg.key;

			this.state.messages[msgVal.key] = msgVal;
			this.setState({ messages: this.state.messages });
  	});

  	msgRef.on('child_removed', msg => {
			let key = msg.key;

			delete this.state.messages[key];
			this.setState({ messages: this.state.messages });
  	});
	}

	render() {
		const messageNodes = Object.keys(this.state.messages).map(key => {
			return <Message key={key} message={this.state.messages[key].message} />;
		});

		return (
			<Card style={{
				flexGrow: 2,
				marginLeft: '30px'
			}}>
				<List>
					{messageNodes}
				</List>
			</Card>
		)
	}
}