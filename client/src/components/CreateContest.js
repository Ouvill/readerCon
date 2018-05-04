import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { NavLink, Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import moment from 'moment';
import routes from '../data/routeList'

const styles = theme => ({
    root: {
    },
    textField: {
        display: 'block',
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    date: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

class CreateContest extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <TextField
                    label='企画名'
                    className={classes.textField}
                    helperText='魅力的な名前をつけよう'
                    margin="normal"
                />
                <TextField
                    label='企画内容'
                    className={classes.textField}
                    multiline
                    rows="4"
                    rowsMax='10'
                    helperText='この企画の目的やルールを入力してください。'
                    margin="normal"
                />
                <TextField
                    label='作品受付終了期間'
                    className={classes.date}
                    type='date'
                    defaultValue={moment().format("YYYY-MM-DD")}
                    helperText='いつまで作品を募集しますか'
                    margin="normal"
                />
                <TextField
                    label='作品一般公開日'
                    className={classes.date}
                    type='date'
                    defaultValue={moment().format("YYYY-MM-DD")}
                    helperText='いつまで作品を募集しますか'
                    margin="normal"
                />
                <TextField
                    label='コンテスト終了日'
                    className={classes.date}
                    type='date'
                    defaultValue={moment().format("YYYY-MM-DD")}
                    helperText='いつまで作品を募集しますか'
                    margin="normal"
                />
                <div>
                    <Button component={NavLink} to={routes.contests}>公開</Button>
                    <Button component={NavLink} to={routes.contests}>キャンセル</Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(CreateContest)
