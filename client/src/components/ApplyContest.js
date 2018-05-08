import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import moment from 'moment';
import routes from '../data/routeList'
import { Grid } from 'material-ui';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    root: {

    }

});

class ApplyContest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: -1,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };
    render() {
        const { classes , contest, } = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify='center'>
                    <Grid item xs={12} sm={8} lg={6}>
                        <FormControl>
                            <FormLabel component="legend">コンテストに参加する作品を選択してください</FormLabel>
                            <RadioGroup
                                aria-label="contest"
                                name="gontest"
                                className={classes.group}
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="1" control={<Radio />} label="オリジナル作品1" />
                                <FormControlLabel value="2" control={<Radio />} label="オリジナル作品2" />
                                <FormControlLabel value="3" control={<Radio />} label="オリジナル作品3" />
                                <FormControlLabel value="-1" control={<Radio />} label="新しく作品を作る" />
                            </RadioGroup>
                        </FormControl>
                        <div>
                            <Button component={NavLink} to={routes.contests}>コンテストに参加する</Button>
                            <Button component={NavLink} to={routes.contests}>キャンセル</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ApplyContest)
