import { combineReducers } from 'redux'
import user from './user'
import message from './message'
import previousPath from './previousPath'
import contests from './contests'
import contest from './contest'
import novel from './novel'
import chapter from './chapter'
import { routerReducer } from 'react-router-redux'
import fetchData from './fetchData'

const rootReducer = combineReducers({
    user,
    message,
    fetchData,
    contests,
    contest,
    novel,
    chapter,
    router: routerReducer,
    previousPath
});

export default rootReducer;
