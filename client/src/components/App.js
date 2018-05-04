import React, { Component } from 'react';
import {
  fetchUserInfo,
  fetchLogout
} from '../actions/user'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'
import { Typography } from 'material-ui';

class App extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const { userInfo, logout, getUserInfo } = this.props

    return (
      <div className="App">
        <div>
          <Typography variant="headline" component="h3">
            ようこそいらっしゃいました。
            </Typography>
          <Typography>
            カクヨムで匿名読者コンテストが開催され多くの人が参加しました。誰が書いたかわからず、内容だけの勝負。いい企画でした。
          </Typography>
          <Typography>
            匿名コンテストをもっと気軽に立ち上げることができるようなシステムを現在開発中ですので、暫くお待ちください。
          </Typography>
        </div>

        {userInfo.display_name && <p> Welcome {userInfo.display_name} </p>}
        {/* <Button>
          <a href='/api/twitter/oauth'>twitter</a>
        </Button> */}

        <Button component={NavLink} to='/registuser'
        >新規ユーザー登録</Button>
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
