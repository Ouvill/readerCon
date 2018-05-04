import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink, Link } from 'react-router-dom'
import zIndex from 'material-ui/styles/zIndex';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1
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
                <BottomNavigationAction label="ホーム" icon={<i class="fas fa-home"></i>} component={NavLink} to='/' />
                <BottomNavigationAction label="コンテスト" icon={<i class="fas fa-list-ul"></i>} component={NavLink} to='/contests' />
                <BottomNavigationAction label="マイページ" icon={<i class="fas fa-book"></i>} component={NavLink} to='/mypage' />
            </BottomNavigation>
        )
    }
}

export default withStyles(styles)(Navigation)
