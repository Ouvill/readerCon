import { combineReducers } from 'redux'
import user from './user'
import message from './message'
import previousPath from './previousPath'
import contest from './contest'
import { routerReducer } from 'react-router-redux'
import fetchData from './fetchData'

const rootReducer = combineReducers({
    user,
    message,
    fetchData,
    contest,
    router: routerReducer,
    previousPath
});

export default rootReducer;
