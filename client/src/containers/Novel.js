import { connect } from 'react-redux'
import NovelComponent from '../components/Novel'
import * as Actions from '../actions/novel'

import store from '../demoStore'


const mapStateToProps = (state, ownProps) => {
    return {
        novel: state.novel,
    }
}

const mapDispatchToProps = dispatch => ({
    next: () => { },
    fetchNovel: (novelId) => { dispatch(Actions.fetchNovel(novelId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(NovelComponent)
