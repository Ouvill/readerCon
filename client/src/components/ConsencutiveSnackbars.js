import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4
    }
})

class ConsecutiveSnackbars extends Component {
    state = {
        open: false,
        messageInfo: {}
    };

    queue = [];

    handleClick = message => () => {
        this.queue.push({
            message,
            key: new Date().getTime(),
        });

        if (this.state.open) {
            this.setState({ open: false });
        } else {
            this.processQueue();
        }
    };

    processQueue = () => {
        if (this.queue.length > 0) {
            this.setState({
                messageInfo: this.queue.shift(),
                oepn: true
            })
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        this.setState({ open: false });
    }

    handleExited = () => {
        this.processQueue();
    }


    render() {
        const { classes } = this.props;
        const { message, key } = this.state.messageInfo;
        return (
            <div>
                <Button onClick={this.handleClick('message a')}>Show message A</Button>
                <Button onClick={this.handleClick('message b')}>Show message B</Button>
                <Snackbar
                    key={key}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    onExited={this.handleExited}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}
