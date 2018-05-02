import { combineReducers } from 'redux'
import user from './user'
import tentativeUser from './tentativeUser'
const rootReducer = combineReducers({
    user,
    tentativeUser
});

export default rootReducer;
