import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
        zInde: 3
    },
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4
    }
})

class ConsecutiveSnackbars extends Component {
    render() {
        const { classes, open, close, exited } = this.props;
        const { message, key } = this.props.message;
        return (
            <div>
                <Snackbar
                    className={classes.root}
                    key={key}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => close()}
                    onExited={() => exited()}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={close}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

export default withStyles(styles)(ConsecutiveSnackbars);
