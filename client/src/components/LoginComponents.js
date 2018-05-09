import React, { Component } from 'react';
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

    content: {
        textAlign: 'center'
    },
    textField: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        display: 'block',
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event, target) {
        const value = event.target.value
        this.setState({
            [target]: value
        });
    }

    render() {
        const {
            classes,
            login
        } = this.props

        return (
            <div className={classes.root}>
                <Grid container justify='center'>
                    <Grid item xs={12} md={8} ld={6} >
                        <Card>
                            <CardContent className={classes.content}>
                                <TextField
                                    required
                                    type='email'
                                    label='メールアドレス'
                                    value={this.state.email}
                                    onChange={(e) => this.handleInput(e, 'email')}
                                    className={classes.textField}
                                />
                                <TextField
                                    required
                                    type='password'
                                    label='パスワード'
                                    value={this.state.password}
                                    onChange={(e) => this.handleInput(e, 'password')}
                                    className={classes.textField} />
                            </CardContent>
                            <CardActions>
                                <Button color='primary' onClick={() => login(this.state.email, this.state.password)}>ログイン</Button>
                                <NavLink to='/'>
                                    <Button color='primary'>キャンセル</Button>
                                </NavLink>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login);
