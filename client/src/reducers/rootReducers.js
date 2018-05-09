import { combineReducers } from 'redux'
import user from './user'
import tentativeUser from './tentativeUser'
import message from './message'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    user,
    tentativeUser,
    message,
    router: routerReducer
});

export default rootReducer;
