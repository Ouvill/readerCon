import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

class UserRegistField extends Component {
    constructor(props) {
        super(props);


    }

    handleCancel() {
        this.props.cancel();
    }
    render() {
        const { classes,
            tentativeUser,
            setTentativeUserData,
            postTentativeUserData } = this.props;
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
                    <Button
                        type='submit'
                        variant="raised"
                        onClick={(e) => {
                            e.preventDefault(); postTentativeUserData();
                            this.props.history.push("/")
                        }}
                    >新規登録</Button>
                    <NavLink
                        to='/'>
                        <Button
                            type='reset'
                            variant='raised'

                        >キャンセル</Button>
                    </NavLink>
                </form>
            </div>
        )
    }
}

UserRegistField.propTypes = {
    setTentativeUserData: PropTypes.func.isRequired,
    postTentativeUserData: PropTypes.func.isRequired,
}

export default withStyles(styles)(UserRegistField)
