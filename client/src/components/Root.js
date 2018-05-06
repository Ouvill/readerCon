import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../configureStore'
import { history } from '../configureStore'
import App from './App'
import UserRegist from '../containers/UserRegits'
import Login from '../containers/Login';
import Navigations from './Navigation';
import { withStyles } from 'material-ui';
import ApplicationBar from './ApplicationBar';
import ContestList from './ContestList';
import MyPage from './MyPage';
import route from '../data/routeList'
import CreateContest from './CreateContest';
import Contest from './Contest';
import ChapterViewer from '../containers/ChapterViewer';

const store = configureStore();

const styles = {
    root: {

    },
    main: {
        height: window.innerHeight * 0.9 || window.innerHeight * 0.9,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
    },

    navi: {
        width: '100vw'
    }

};


class Root extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Provider store={store}>
                <div className={classes.root}>
                    <ConnectedRouter history={history}>
                        <div>
                            <div className={classes.main}>
                                <ApplicationBar />
                                <Route exact path="/" component={App} />
                                <Route path="/registUser" component={UserRegist} />
                                <Route path='/login' component={Login} />
                                <Route exact path='/contests' component={ContestList} />
                                <Route path={route.contests + ':contestId'} component={Contest} />
                                <Route path='/mypage' component={MyPage} />
                                <Route path={route.createContest} component={CreateContest} />
                                <Route path={route.novels+':novelId'} component={ChapterViewer} />
                            </div>
                            <Navigations className={classes.navi} />
                        </div>
                    </ConnectedRouter >
                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(Root)
