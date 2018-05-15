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

const NovelItem = ({ novelId, title, overview, classes, path }) => {
    return (
        <div>
            <ListItem className={classes.root} button component={NavLink} to={path ? path : '/novels/' + novelId}>
                <ListItemText primary={title} secondary={overview} />
            </ListItem>
            <Divider light />
        </div>
    )
}
export default withStyles(styles)(NovelItem)
