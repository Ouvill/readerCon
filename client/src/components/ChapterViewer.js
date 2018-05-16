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
        height: window.innerHeight * 0.8 || window.innerHeight * 0.8,
        // overflowY: 'hidden',
        // overflowX: 'auto'
    },
    viewer: {
        // MsWritingMode: 'tb-rl',
        // WebkitWritingMode: 'vertical-rl',
        // OWritingMode: 'vertical-rl',
        // WritingMode: 'vertical-rl'
    },
    title: {

    },
    author: {

    },
    contents: {

    }
})

class ChapterViewer extends Component {

    componentWillMount() {
        const { fetchChapter, fetchNovel, match } = this.props
        const { novelId, chapterNum } = match.params
        fetchNovel(novelId);
        fetchChapter(novelId, chapterNum)


    }


    replaceText(text) {
        let viewText = text.replace(/\r\n|\n|\r/g, "<br>");
        // viewText = text.replace(/[ ]/, '　');
        return viewText;
    }

    render() {
        const { classes, novel, chapter, next, match } = this.props
        const { novelId, chapterNum } = match.params

        return (
            <Grid container className={classes.root} justify='center'>
                <Grid item xs={12} sm={8} lg={6} >
                    <div className={classes.viewer}>

                        <Typography variant="headline" component="h3">
                            {chapter.title}
                        </Typography>
                        {novel.author &&
                            <Typography variant="subheading" component="h3" align='right'>
                                作者：{novel.author.displayName}
                            </Typography>}
                        <Typography
                        >
                            {this.replaceText(chapter.content)}
                        </Typography>

                        <Grid container>
                            <Grid item xs={6}>
                                <FormControlLabel control={
                                    <Checkbox
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite />}
                                        // checked={favorite}
                                        value="favorite"
                                    />} label='お気に入り' />
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <Grid item xs={12}>
                                <Button variant='raised' component={NavLink} to='/'>次の話</Button>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles)(ChapterViewer)
