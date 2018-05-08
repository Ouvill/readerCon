import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        textAlign: 'center'

    }

});

const ChapterListItem = ({ novelId, chapterId, chapterNum, title ,classes }) => {

    return (
        <ListItem className={classes.root} button component={NavLink} to={'/novels/'+ novelId +'/chapters/' + chapterNum} >
            <ListItemText primary={title}/>
        </ListItem>
    )
}
export default withStyles(styles)(ChapterListItem)
