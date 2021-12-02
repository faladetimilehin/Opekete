import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main-component/App/App';
import { Provider } from 'react-redux';
import store from './store';

import * as serviceWorker from './serviceWorker';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
    <Provider store={store}>
       <App />
       </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
