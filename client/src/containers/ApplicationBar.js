import { connect } from 'react-redux'
import * as Actions from '../actions/login'
import { logPreviousPath } from '../actions/previousPath'
import ApplicationBarComponents from '../components/ApplicationBar'


const mapStateToProps = (state, ownProps) => {
    return {
        displayName: state.user.userInfo.displayName,
        path: state.router.location.pathname
    }
}

const mapDispatchToProps = dispatch => ({
    logPath: (path) => { if (path != '/login' && path != '/registUser') { dispatch(logPreviousPath(path)) } },
    logout: () => { dispatch(Actions.logout()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationBarComponents)
