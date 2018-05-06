import React from 'react';
import PropTypes from 'prop-types'
import ChapterListItem from './ChapterListItem';
import List from 'material-ui/List';
import NovelList from './NovelList';

const ChapterList = ({ novelId , chapters }) => (
    <List>
        {chapters.map(chapter => (
            <ChapterListItem key={chapter.chapterId} novelId={novelId} {...chapter} />
        ))}
    </List>
)

ChapterList.propTypes = {
    chapters: PropTypes.arrayOf(
        PropTypes.shape({
            chapterId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default ChapterList
