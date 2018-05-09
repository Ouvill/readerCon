import React from 'react'
import { connect } from 'react-redux'
import { logPreviousPath } from '../actions/previousPath'
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom'
import Button from 'material-ui/Button';


const styles = theme => ({
    navLink: {
        textDecoration: 'none',
        color: 'unset'
    }
})

const LogPathNavLinkButton = ({ logPath, to, color, path, children, classes }) => {
    return (
        <NavLink to={to} onClick={() => logPath(path)} className={classes.navLink}>
            <Button color={color}>{children}</Button>
        </NavLink>)
}
const styled = withStyles(styles)(LogPathNavLinkButton)


const mapStateToProps = (state, ownProps) => {
    return {
        path: state.router.location.pathname
    }
}

const mapDispatchToProps = dispatch => ({
    logPath: (path) => { if (path != '/login' && path != '/registUser') { dispatch(logPreviousPath(path)) } },
})


export default connect(mapStateToProps, mapDispatchToProps)(styled)
