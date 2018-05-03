import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
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
            <div className='Login'>
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
                <Button variant='raised' onClick={() => login(this.state.email, this.state.password)}>ログイン</Button>
                <NavLink to='/'>
                    <Button variant='raised'>キャンセル</Button>
                </NavLink>
            </div>
        )
    }
}

export default withStyles(styles)(Login);
