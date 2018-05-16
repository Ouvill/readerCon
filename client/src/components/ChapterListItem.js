import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

const styles = theme => ({
    root: {
        textAlign: 'center'

    }

});

const ChapterListItem = ({ novelId, chapterId, chapterNum, title, classes, path }) => {

    return (
        <div>
            <ListItem className={classes.root} button component={NavLink} to={path ? path : '/novels/' + novelId + '/chapters/' + chapterNum} >
                <ListItemText primary={title} />
            </ListItem>
            <Divider light />
        </div>
    )
}
export default withStyles(styles)(ChapterListItem)
