import { connect } from 'react-redux'
import {
    setTentativeUserData,
    postTentativeUserData
} from '../actions/user';
import UserRegistField from '../components/UserRegistField'

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    tentativeUser: state.tentativeUser
});

const mapDispatchToProps = dispatch => ({
    setTentativeUserData: (target, value) => dispatch(setTentativeUserData(target, value)),
    postTentativeUserData: () => dispatch(postTentativeUserData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRegistField)
