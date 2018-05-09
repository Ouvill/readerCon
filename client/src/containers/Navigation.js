import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStateToProps = (state, ownProps) => ({
    loading: state.fetchData.showProgress
})

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
