import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';

import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: blue500,
		primary2Color: blue700,
		primary3Color: blue100,
    accent1Color: pink400,
  }
});

export default class App extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar title="RTD-PWA" />
					<div style={{
						display: 'flex',
						flexFlow: 'row wrap',
						maxWidth: 1200,
						width: '100%',
						margin: '30px auto'
					}}>
						<ChannelList />
						<MessageList />
					</div>
					<MessageBox />
				</div>
		  </MuiThemeProvider>
		);
	}
}
