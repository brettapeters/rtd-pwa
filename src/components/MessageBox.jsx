import React from 'react';
import Card from 'material-ui/Card';

import * as firebase from 'firebase';

export default class MessageBox extends React.Component {
	constructor() {
		super();

		this.state = {
			message: ''
		}

		this.msgRef = firebase.database().ref('messages/');

		this.onChange = this.onChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	onChange(e) {
		this.setState({
			message: e.target.value
		})
	}

	onKeyDown(e) {
		if (e.keyCode === 13 && e.target.value.trim() != '') {
			e.preventDefault();

			this.msgRef.push({
				message: this.state.message
			});

			this.setState({ message: '' });
		}
	}

	render() {
		return (
			<Card style={{
				maxWidth: 1200,
				margin: '30px auto',
				padding: 30
			}}>
				<textarea
					value={this.state.message}
					onChange={this.onChange}
					onKeyDown={this.onKeyDown}
					style={{
						width: '100%',
						borderColor: '#d0d0d0',
						resize: 'none',
						borderRadius: 3,
						minHeight: 50,
						color: '#444',
						fontSize: 14,
						outline: 'auto 0'
					}}
				/>
			</Card>
		);
	}
}