import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App.jsx';
require('./main.scss');

// var config = {
//   apiKey: "AIzaSyCnVh0zZx_vHP_0_K72zuCBu29_TopTPGE",
//   authDomain: "rtdeezy-6ff6e.firebaseapp.com",
//   databaseURL: "https://rtdeezy-6ff6e.firebaseio.com",
//   projectId: "rtdeezy-6ff6e",
//   storageBucket: "rtdeezy-6ff6e.appspot.com",
//   messagingSenderId: "415128902950"
// };
// firebase.initializeApp(config);
// firebase.database()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

// https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#486f
let reactRoot = document.createElement('div');
reactRoot.setAttribute('id', 'root');
document.body.insertBefore(reactRoot, document.body.childNodes[0]);

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App)
  });
}
