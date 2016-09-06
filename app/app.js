/* global document */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import '../assets/css/app.css!';
import store from './config/configureRedux';
import App from './layout/AppComponent';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('chrono-race')
);
