import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../configureStore'
import { history } from '../configureStore'
import App from './App'
import UserRegist from '../containers/UserRegits'
import Login from '../containers/Login';
import Navigations from './Navigation';
import { withStyles } from 'material-ui';
import ApplicationBar from './ApplicationBar';
import Contests from './Contests';
import MyPage from './MyPage';
import demoStore from '../demoStore'

const store = configureStore();

const styles = {
    root: {

    },
};


class Root extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Provider store={store}>
                <div className={classes.root}>
                    <ConnectedRouter history={history}>
                        <div>
                            <ApplicationBar />
                            <Navigations />
                            <Route exact path="/" component={App} />
                            <Route path="/registUser" component={UserRegist} />
                            <Route path='/login' component={Login} />
                            <Route path='/contests' component={Contests} />
                            <Route path='/mypage' component={MyPage}/>
                        </div>
                    </ConnectedRouter >
                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(Root)
