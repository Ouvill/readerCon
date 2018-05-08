import { connect } from 'react-redux'
import ChapterViewerComponent from '../components/ChapterViewer'

import store from '../demoStore'


const mapStateToProps = (state, ownProps) => {
    const chapter = store.selectChapter
    return {
        chapter: chapter,
        favorite: chapter.favorite,
    }
}

const mapDispatchToProps = dispatch => ({
    next: () => {}

})

export default connect(mapStateToProps, mapDispatchToProps)(ChapterViewerComponent)
