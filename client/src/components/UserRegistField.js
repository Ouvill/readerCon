import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

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

class UserRegistField extends Component {
    render() {
        const { classes, setTentativeUserData, tentativeUser } = this.props;
        return (
            <div className='UserRegist'>
                <form className={classes.container}>
                    <TextField
                        required
                        id="userName"
                        label="ユーザーID"
                        className={classes.textField}
                        onChange={(e) => setTentativeUserData('userName', e.target.value, )}
                        value={tentativeUser.userName}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="displayName"
                        label="ユーザー名"
                        className={classes.textField}
                        onChange={(e) => setTentativeUserData('displayName', e.target.value, )}
                        value={tentativeUser.displayName}
                        margin="normal"
                    />
                    <TextField
                        required
                        type='email'
                        id="email"
                        label="メールアドレス"
                        className={classes.textField}
                        onChange={(e) => setTentativeUserData('email', e.target.value, )}
                        value={tentativeUser.email}
                        margin="normal"
                    />
                    <TextField
                        required
                        type='password'
                        id="password"
                        label="パスワード"
                        className={classes.textField}
                        onChange={(e) => setTentativeUserData('password', e.target.value)}
                        value={tentativeUser.password}
                        margin="normal"
                    />
                </form>
            </div>
        )
    }
}

UserRegistField.propTypes = {
    setTentativeUserData: PropTypes.func.isRequired,
}

export default withStyles(styles)(UserRegistField)
