import { connect } from 'react-redux'
import NovelComponent from '../components/Novel'

import store from '../demoStore'


const mapStateToProps = (state, ownProps) => {
    const chapter = store.selectChapter
    return {
        novel: store.selectNovel,
    }
}

const mapDispatchToProps = dispatch => ({
    next: () => { }

})

export default connect(mapStateToProps, mapDispatchToProps)(NovelComponent)
