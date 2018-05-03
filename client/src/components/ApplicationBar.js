import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui';
import { NavLink, Link } from 'react-router-dom'

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

};

class ApplicationBar extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                        <NavLink to='/' className={classes.flex}>
                    <Typography variant="title" color="inherit" >
                        匿名読者コンテスト
                    </Typography>
                    </NavLink>
                    <NavLink to="/login">
                        <Button color="inherit">ログイン</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>)
    }
}

export default withStyles(styles)(ApplicationBar)
