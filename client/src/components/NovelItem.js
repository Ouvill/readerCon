import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom'


const NovelItem = ({novelId , title, overview }) => (
    <ListItem className='NovelItem' button component={NavLink} to={'/novels/' + novelId} >
        <ListItemText primary={title} secondary={overview}/>
    </ListItem>
)
export default NovelItem
