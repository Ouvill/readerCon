import { combineReducers } from 'redux'
import user from './user'
import tentativeUser from './tentativeUser'
import message from './message'
import previousPath from './previousPath'
import { routerReducer } from 'react-router-redux'
import fetchData from './fetchData'

const rootReducer = combineReducers({
    user,
    tentativeUser,
    message,
    fetchData,
    router: routerReducer,
    previousPath
});

export default rootReducer;
