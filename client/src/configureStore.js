import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducers'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

export const history = createHistory();
const loggerMiddleware = createLogger();
const routerMiddle = routerMiddleware(history)

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            routerMiddle,
            loggerMiddleware,
            thunkMiddleware,
        )
    );
}
