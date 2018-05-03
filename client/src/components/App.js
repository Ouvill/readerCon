import React, { Component } from 'react';
import {
  fetchUserInfo,
  fetchLogout
} from '../actions/user'
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
        <div>
          <p>
            ようこそいらっしゃいました。
            </p>
          <p>
            カクヨムで匿名読者コンテストが開催され多くの人が参加しました。誰が書いたかわからず、内容だけの勝負。胸が熱くなりますね。
          </p>
        </div>

        {userInfo.display_name && <p> Welcome {userInfo.display_name} </p>}
        {/* <Button>
          <a href='/api/twitter/oauth'>twitter</a>
        </Button> */}
        <NavLink to="/registUser">
          <Button
          >新規ユーザー登録</Button>
        </NavLink>
        <Button onClick={logout}>logout</Button>
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
