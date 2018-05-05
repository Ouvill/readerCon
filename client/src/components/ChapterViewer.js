import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom'
import { Typography } from 'material-ui';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },
    title: {

    },
    author: {

    },
    contents: {

    }
})

class Novel extends Component {
    replaceText(text) {
        let viewText = text.replace(/\r\n|\n|\r/g, "<br>");
        // viewText = text.replace(/[ ]/, '　');
        return viewText;
    }

    render() {
        const { classes, chapter, favorite, next } = this.props

        return (
            <Grid container className={classes.root} justify='center'>
                <Grid item xs={12} sm={8} lg={6} >
                    <Typography variant="headline" component="h3">
                        {chapter.title}
                    </Typography>
                    {chapter.author &&
                        <Typography variant="subheading" component="h3" align='right'>
                            {chapter.author}
                        </Typography>}
                    <Typography
                    >
                        {this.replaceText(chapter.text)}
                    </Typography>

                    <Grid container>
                        <Grid item xs={6}>
                            <FormControlLabel control={
                                <Checkbox
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                    checked={favorite}
                                    value="favorite"
                                />} label='応援する' />
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item xs={12}>
                            <Button variant='raised' component={NavLink} to='/'>次の話</Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles)(Novel)
