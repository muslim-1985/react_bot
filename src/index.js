import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Auth from './components/Auth';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import config from 'react-global-configuration';
import configuration from './config';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

config.set(configuration);

//redux dev tools chrome extensions activate && add middleware redux-thunk
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/auth" component={Auth}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
