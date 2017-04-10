import React from 'react';
// import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';

import MessageList from './MessageList.jsx';

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

	// componentDidMount() {
	// 	const usersRef = firebase.database().ref('users/');
		
	// 	usersRef.on('value', snapshot => {
 //  		this.setState({ users: snapshot.val() });
 //  	});
	// }

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar title="RTD-PWA" />
					<MessageList />
				</div>
		  </MuiThemeProvider>
		);
	}
}
