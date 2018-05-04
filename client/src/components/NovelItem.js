import React from 'react';
import Typography from 'material-ui/Typography';
import { ListItem, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom'


const NovelItem = ({id , title, overview }) => (
    <ListItem className='NovelItem' button component={NavLink} to={'/novels/' + id} >
        <ListItemText primary={title} secondary={overview}/>
    </ListItem>
)
export default NovelItem
