import React from 'react';
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography';
import NovelItem from './NovelItem';
import List from 'material-ui/List';

const NovelList = ({ novels }) => (
    <List>
        {novels.map(novel => (
            <NovelItem key={novel.id} {...novel} />
        ))}


    </List>
)

NovelList.propTypes = {
    novels: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default NovelList
