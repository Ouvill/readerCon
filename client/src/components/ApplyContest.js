import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import moment from 'moment';
import routes from '../data/routeList'
import { Grid } from 'material-ui';

const styles = theme => ({
    root: {

    }

});

class ApplyContest extends React.Component {

    render() {
        const { classes , contest, } = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify='center'>
                    <Grid item xs={12} sm={8} lg={6}>


                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ApplyContest)
