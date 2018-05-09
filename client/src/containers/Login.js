import { connect } from 'react-redux'
import LoginComponents from '../components/LoginComponents'
import { tryLogin } from '../actions/login'

const mapStateToProps = (state, ownProps) => ({
    previousPath: state.previousPath,
})

const mapDispatchToProps = dispatch => ({
    login: (email, password) => { dispatch(tryLogin(email, password)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponents)
