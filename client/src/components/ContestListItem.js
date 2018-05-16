import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { NavLink } from 'react-router-dom'
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
    root: {
        textDecoration: 'none',
        color: 'unset'
    }
})

const ContentListItem = ({ title, overview, contestId, classes }) => {
    return (
        <Grid item xs={12} sm={6} component={NavLink} to={'/contests/' + contestId} className={classes.root}>
            <Card>
                <CardContent>
                    <Typography variant="headline" component="h3">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {overview}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>)
}

export default withStyles(styles)(ContentListItem)
