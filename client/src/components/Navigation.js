import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink, Link } from 'react-router-dom'

const styles = {
    root: {
    },
};

class Navigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="ホーム" component={NavLink}  to='/' />
                <BottomNavigationAction label="コンテスト" component={NavLink} to='/contests' />
                <BottomNavigationAction label="マイページ" component={NavLink} to='/mypage' />
            </BottomNavigation>

        )

    }
}

export default withStyles(styles)(Navigation)
