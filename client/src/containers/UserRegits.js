import { connect } from 'react-redux'
import {
    setTentativeUserData,
    postTentativeUserData,
    registCancel
} from '../actions/user';
import UserRegistField from '../components/UserRegistField'

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    tentativeUser: state.tentativeUser
});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(registCancel()),
    setTentativeUserData: (target, value) => dispatch(setTentativeUserData(target, value)),
    postTentativeUserData: () => dispatch(postTentativeUserData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRegistField)
