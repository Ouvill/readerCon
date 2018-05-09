import { push } from 'react-router-redux'
import * as message from './message'
import * as fetchData from './fetchData'

export const OPEN_LOGIN_WINDOW = 'OPEN_LOGIN_WINDOW'
export const TRY_LOGIN = 'TRY_LOGIN'
export const SUCCESS_LOGIN = 'SUCESS_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'
export const LOGOUT = 'LOGOUT';


export const openLoginWindow = (previousPath) => {
    return {
        type: OPEN_LOGIN_WINDOW,
        previousPath: previousPath
    }
}

export const tryLogin = (email, password) => {
    return (dispatch, getState) => {
        const json = { email, password }
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const path = getState().previousPath
        dispatch(fetchData.request())
        fetch('/api/login', {
            method: 'POST',
            headers,
            body: JSON.stringify(json),
        }).then(response => response.json()).then(json => {
            if (json.result) {
                dispatch(succesLogin(json));
                dispatch(push(path));
                dispatch(fetchData.recieve())
            } else {
                dispatch(message.setMessage('ログインに失敗しました'));
                dispatch(fetchData.recieve())
            }
        }).catch(err => {
            console.log(err.stack)
            dispatch(message.setMessage('ログインに失敗しました'));
            dispatch(fetchData.recieve());
        }
        );
    }
}

const succesLogin = (json) => {
    return {
        type: SUCCESS_LOGIN,
        token: json.token,
        userInfo: json.userInfo
    }

}

const failedLogin = () => {
    return {
        type: FAILED_LOGIN,
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        dispatch(message.setMessage('ログアウトしました'))
        dispatch({
            type: LOGOUT
        })
    }
}
