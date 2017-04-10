import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as firebase from 'firebase';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App.jsx';
require('./main.scss');

firebase.initializeApp(require('../firebase-config'));

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
