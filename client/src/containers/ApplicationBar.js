import { connect } from 'react-redux'
import * as Actions from '../actions/login'
import ApplicationBarComponents from '../components/ApplicationBar'


const mapStateToProps = (state, ownProps) => {
    return {
        displayName: state.user.userInfo.displayName,
        path: state.router.location.pathname
    }
}

const mapDispatchToProps = dispatch => ({
    login: (path) => { if (path != '/login' && path != '/registUser') { dispatch(Actions.openLoginWindow(path)) } },
    logout: () => { dispatch(Actions.logout()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationBarComponents)
