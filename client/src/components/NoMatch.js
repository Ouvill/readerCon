import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
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

        return (
            <div>
                サイトページがありません！！
                管理人は早急にページを用意してください！！

                <Button component={NavLink} to='/'>トップに戻る</Button>

            </div>

        )

    }
}

export default withStyles(styles)(Navigation)
