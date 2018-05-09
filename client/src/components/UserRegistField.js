import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        display: 'block',
    },
    interface: {
        marginLeft: 'auto',
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class UserRegistField extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.state = {
            userName: '',
            displayName: '',
            email: '',
            password: '',
        }
    }

    handleInput(target, value) {
        this.setState(
            { [target]: value }
        )

    }

    handleCancel() {
        this.props.cancel();
    }
    render() {
        const { classes,
            tryRegist } = this.props;
        let { userName, displayName, email, password } = this.state

        return (
            <div className={classes.root}>
                <Grid container justify='center'>
                    <Grid item xs={12} md={8} ld={6} >
                        <Card>
                            <CardContent className={classes.content}>
                                <TextField
                                    required
                                    id="userName"
                                    label="ユーザーID"
                                    className={classes.textField}
                                    onChange={(e) => this.handleInput('userName', e.target.value, )}
                                    value={this.state.userName}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="displayName"
                                    label="ユーザー名"
                                    className={classes.textField}
                                    onChange={(e) => this.handleInput('displayName', e.target.value, )}
                                    value={this.state.displayName}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    type='email'
                                    id="email"
                                    label="メールアドレス"
                                    className={classes.textField}
                                    onChange={(e) => this.handleInput('email', e.target.value, )}
                                    value={this.state.email}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    type='password'
                                    id="password"
                                    label="パスワード"
                                    className={classes.textField}
                                    onChange={(e) => this.handleInput('password', e.target.value)}
                                    value={this.state.password}
                                    margin="normal"
                                />
                            </CardContent>
                            <CardActions>
                                <div className={classes.interface}>
                                    <Button
                                        type='submit'
                                        color='primary'
                                        onClick={(e) => {
                                            tryRegist(userName, displayName, email, password);
                                        }}
                                    >新規登録</Button>
                                    <NavLink
                                        to='/'>
                                        <Button
                                            type='reset'
                                            color='primary'

                                        >キャンセル</Button>
                                    </NavLink>
                                </div>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(UserRegistField)
