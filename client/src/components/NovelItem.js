import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        textAlign: 'center'

    }

});

const NovelItem = ({ novelId, title, overview, classes }) => {

    return (
    <ListItem className={classes.root} button component={NavLink} to={'/novels/' + novelId} >
        <ListItemText primary={title} secondary={overview}/>
    </ListItem>
)}
export default withStyles(styles)(NovelItem)
