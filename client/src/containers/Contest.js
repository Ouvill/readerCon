import { connect } from 'react-redux'
import ConntestsComponent from '../components/Contest'
import * as Actions from '../actions/contests'


const mapStateToProps = (state, ownProps) => ({
    contest: state.contest
})

const mapDispatchToProps = dispatch => ({
    fetchContest: (contestId) => { dispatch(Actions.fetchContest(contestId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConntestsComponent)
