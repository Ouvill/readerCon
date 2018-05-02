import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from '../configureStore'
import App from './App'
import UserRegist from '../containers/UserRegits'

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/registUser" component={UserRegist} />
                    </div>
                </Router>
            </Provider>
        )
    }
}
