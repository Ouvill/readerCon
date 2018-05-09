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
        const { classes, login, path } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <NavLink to='/' className={classes.navLink}>
                            匿名読者コンテスト
                            </NavLink>
                    </Typography>
                    <NavLink to="/login" onClick={() => login(path)} className={classes.navLink}>
                        <Button color="inherit">ログイン</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>)
    }
}

export default withStyles(styles)(ApplicationBar)
