import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../configureStore'
import {history} from '../configureStore'
import App from './App'
import UserRegist from '../containers/UserRegits'
import Login from '../containers/Login'

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/registUser" component={UserRegist} />
                        <Route path='/login' component={Login} />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}
