import { connect } from 'react-redux'
import ConntestListComponent from '../components/ContestList'
import * as Actions from '../actions/contests'


const mapStateToProps = (state, ownProps) => ({
    contests: state.contests
})

const mapDispatchToProps = dispatch => ({
    fetchEntryAcceptingContestList: () => { dispatch(Actions.fetchEntryAcceptingContestList()) },

    fetchVoteAcceptingContestList: () => { dispatch(Actions.fetchVoteAcceptingContestList()) },

    fetchPastContestList: () => { dispatch(Actions.fetchPastContestList()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConntestListComponent)
