import React, { Component } from 'react'
import { withStyles } from 'material-ui';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
});

class Contests extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
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
        )
    }
}

export default withStyles(styles)(Contests);
