import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui';
import { NavLink } from 'react-router-dom'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navLink: {
        textDecoration: 'none',
        color: 'unset'
    }

};

class ApplicationBar extends Component {


    render() {
        const { classes, login, logout, path, displayName } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <NavLink to='/' className={classes.navLink}>
                            匿名読者コンテスト
                            </NavLink>
                    </Typography>

                    {
                        (() => {
                            if (!displayName && path != '/login' && path != '/registUser') {
                                return (
                                    <div>
                                        <NavLink to="/registUser" onClick={() => login(path)} className={classes.navLink}>
                                            <Button color="inherit">新規登録</Button>
                                        </NavLink>
                                        <NavLink to="/login" onClick={() => login(path)} className={classes.navLink}>
                                            <Button color="inherit">ログイン</Button>
                                        </NavLink>
                                    </div>
                                )
                            }
                        })()
                    }
                    {displayName &&
                        <div>
                            {displayName}
                            <Button color='inherit' onClick={logout}>ログアウト</Button>
                        </div>
                    }
                </Toolbar>
            </AppBar>)
    }
}

export default withStyles(styles)(ApplicationBar)
