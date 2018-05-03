import { combineReducers } from 'redux'
import user from './user'
import tentativeUser from './tentativeUser'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    user,
    tentativeUser,
    router: routerReducer
});

export default rootReducer;
