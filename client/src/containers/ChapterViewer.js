import { connect } from 'react-redux'
import ChapterViewerComponent from '../components/ChapterViewer'
import { fetchChapter } from '../actions/chapter'
import { fetchNovel } from '../actions/novel'

import store from '../demoStore'


const mapStateToProps = (state, ownProps) => {
    return {
        chapter: state.chapter,
        novel: state.novel
    }
}

const mapDispatchToProps = dispatch => ({
    next: () => { },
    fetchChapter: (novelId, chapterNum) => { dispatch(fetchChapter(novelId, chapterNum)) },
    fetchNovel: (novelId) => { dispatch(fetchNovel(novelId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChapterViewerComponent)
