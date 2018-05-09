import { connect } from 'react-redux'
import ConsencutiveSnackbarsComponents from '../components/ConsencutiveSnackbars'
import { setMessage, closeMessage, exitedMessage } from '../actions/message';


const mapStateToProps = (state, ownProps) => ({
    open: state.message.open,
    message: state.message.current
})

const mapDispatchToProps = dispatch => ({
    close: () => { dispatch(closeMessage()) },
    exited: () => { dispatch(exitedMessage()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsencutiveSnackbarsComponents)
