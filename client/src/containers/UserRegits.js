import { connect } from 'react-redux'
import { setTentativeUserData } from '../actions/user';
import UserRegistField from '../components/UserRegistField'

const mapStateToProps = (state, ownProps) => ({
    tentativeUser: state.tentativeUser
});

const mapDispatchToProps = dispatch => ({
    setTentativeUserData: (target, value) => dispatch(setTentativeUserData(target, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRegistField)
