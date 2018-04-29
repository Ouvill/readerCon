import React, { Component } from 'react';
import logo from './logo.svg';
import {fetchUserInfo} from '../actions/user'
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchUserInfo());
  }

  render() {
    const { userInfo } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {userInfo.display_name && <p> Welcome {userInfo.display_name} </p> }


        <a href='/api/twitter/oauth'>twitter</a>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.user.userInfo
  }
}

export default connect(mapStateToProps)(App);
