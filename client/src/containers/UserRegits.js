import { connect } from 'react-redux'
import {
    setTentativeUserData,
    postTentativeUserData,
    registCancel
} from '../actions/user';
import {
    tryRegist
} from '../actions/registUser'

import UserRegistField from '../components/UserRegistField'

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(registCancel()),
    tryRegist: (userName, displayName, email, password) => dispatch(tryRegist(userName, displayName, email, password))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRegistField)
