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
import ChapterList from './ChapterList'
import ParagraphText from './ParagraphText';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {

    },
    author: {

    },
    contents: {

    },

})

class Novel extends Component {
    componentWillMount = () => {
        const { novelId } = this.props.match.params
        const { fetchNovel } = this.props
        fetchNovel(novelId)
    }

    addChapterPath = (chapters, novelId, contestId) => {
        if (typeof (contestId) === 'undefined' || typeof (novelId) === 'undefined') {
            return chapters
        }

        return chapters.map((chapter) => {
            chapter.path = '/contests/' + contestId + '/novels/' + novelId + '/chapters/' + chapter.chapterNum
            return chapter
        })
    }

    render() {
        const { classes, novel, favorite, next } = this.props

        return (
            <Grid container className={classes.root} justify='center'>
                <Grid item xs={12} sm={8} lg={6} >
                    <Typography variant="headline" component="h3">
                        {novel.title}
                    </Typography>
                    {novel.author ?
                        <Typography variant="subheading" component="h3" align='right'>
                            作者：{novel.author.displayName}
                        </Typography> :
                        <Typography variant="subheading" component="h3" align='right'>
                            作者：秘密です
                        </Typography>
                    }
                    <Typography>
                        <ParagraphText text={novel.overview} />
                    </Typography>

                    {novel.chapters.length ?
                        <ChapterList novelId={novel.novelId} chapters={this.addChapterPath(novel.chapters)} /> :
                        <Typography>まだお話が投稿されていません</Typography>
                    }
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
