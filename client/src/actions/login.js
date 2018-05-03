import {push} from 'react-router-redux'

export const TRY_LOGIN = 'TRY_LOGIN'
export const SUCCESS_LOGIN = 'SUCESS_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'

export const tryLogin = (email, password) => {
    return (dispatch, getState) => {
        const json={email, password}
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        fetch('/api/login', {
            method: 'POST',
            headers,
            body: JSON.stringify(json),
        }).then(response => response.json()).then(json => {
            if (json.result) {
                dispatch(succesLogin(json.token));
                dispatch(push('/'));
            } else {
                dispatch(failedLogin);
            }
        });
    }
}

const succesLogin = (token) => {
    return {
        type: SUCCESS_LOGIN,
        token
    }

}

const failedLogin = () => {
    return {
        type: FAILED_LOGIN,
    }

}
