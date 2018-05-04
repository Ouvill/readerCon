import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden',

    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: '12%',
        right: '5%'
    },
});

class ContestList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6} component={NavLink} to='/contest/1'>
                        <Paper className={classes.paper} >
                            <Typography variant="headline" component="h3">
                                企画1
                        </Typography>
                            <Typography component="p">
                                匿名小説コンテストって面白いよねっということでソレ専用のサイトを用意しだしているあたり馬鹿だなぁって思ってしまう。
                                システムの完成はまだまだ先です
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>企画1</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>企画1</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>企画1</Paper>
                    </Grid>
                </Grid>
                <Button variant="fab" color="secondary" aria-label="edit" className={classes.button} component={NavLink} to='/create/contest'>
                    <Icon>edit_icon</Icon>
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(ContestList);
