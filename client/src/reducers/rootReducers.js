import { combineReducers } from 'redux'
import user from './user'
import message from './message'
import previousPath from './previousPath'
import contest from './contest'
import novel from './novel'
import { routerReducer } from 'react-router-redux'
import fetchData from './fetchData'

const rootReducer = combineReducers({
    user,
    message,
    fetchData,
    contest,
    novel,
    router: routerReducer,
    previousPath
});

export default rootReducer;
