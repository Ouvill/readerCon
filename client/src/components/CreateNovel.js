import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import routes from '../data/routeList'
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

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
    state = {
        value: -1,
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
    };


    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify='center'>
                <Grid item xs={12} sm={8} lg={6} >
                    <TextField
                        label='タイトル'
                        className={classes.textField}
                        helperText='魅力的な名前をつけよう'
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label='キャッチコピー'
                        className={classes.textField}
                        multiline
                        rows="4"
                        rowsMax='10'
                        helperText=''
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label='あらすじ'
                        className={classes.textField}
                        multiline
                        rows="4"
                        rowsMax='10'
                        helperText='この小説がどんなものか教えてください'
                        margin="normal"
                        fullWidth
                    />

                    <FormControl>
                        <FormLabel component="legend">参加コンテスト</FormLabel>
                        <RadioGroup
                            aria-label="contest"
                            name="gontest"
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="-1" control={<Radio />} label="コンテストに参加しない" />
                            <FormControlLabel value="1" control={<Radio />} label="コンテスト1" />
                            <FormControlLabel value="2" control={<Radio />} label="コンテスト2" />
                            <FormControlLabel value="3" control={<Radio />} label="コンテスト3" />
                        </RadioGroup>
                    </FormControl>

                    <div>
                        <Button component={NavLink} to={routes.contests}>作成</Button>
                        <Button component={NavLink} to={routes.contests}>キャンセル</Button>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CreateContest)
