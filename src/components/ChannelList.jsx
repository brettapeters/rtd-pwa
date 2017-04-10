import React from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

export default class ChannelList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			channels: [
				"Cats",
				"Dogs"
			]
		};
	}

	render() {
		const channelNodes = this.state.channels.map(channel => {
			return <Channel channel={channel} />;
		});

		return (
			<Card style={{
				flexGrow: 1
			}}>
				<List>
					{channelNodes}
				</List>
			</Card>
		)
	}
}