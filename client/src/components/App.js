import React, { Component } from 'react';
import logo from './logo.svg';
import {
  fetchUserInfo,
  fetchLogout
} from '../actions/user'
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const { userInfo, logout, getUserInfo } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {userInfo.display_name && <p> Welcome {userInfo.display_name} </p>}
        <a href='/api/twitter/oauth'>twitter</a>
        <button onClick={getUserInfo}>getUserInfo</button>
        <button onClick={logout}>logout</button>
        <NavLink to="/registUser">
          <Button
            variant="raised"
          >新規ユーザー登録</Button>
        </NavLink>
        <NavLink to="/login">
          <Button
            variant="raised"
          >ログイン</Button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(fetchLogout()),
    getUserInfo: () => dispatch(fetchUserInfo())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
