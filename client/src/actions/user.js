import fetch from 'cross-fetch'

export const REQUEST_USERINFO = 'REQUEST_USERINFO';
export const RECIEVE_USERINFO = 'RECIEVE_USERINFO';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const REGIST = 'REGIST';
export const SET_TENTATIVE_USER_DATA = 'SET_TENTATIVE_USER_DATA';
export const RECIEVE_REGIST_RESULT = 'RECIEVE_REGIST_RESULT'

function requestUserInfo() {
    return {
        type: REQUEST_USERINFO
    }
}

function recieveUserInfo(json) {
    return {
        type: RECIEVE_USERINFO,
        res: json
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

export function fetchUserInfo() {
    return dispatch => {
        dispatch(requestUserInfo())
        return fetch('/api/userInfo')
            .then(response => response.json())
            .then(json => dispatch(recieveUserInfo(json)));
    }
}

export function fetchLogout() {
    return dispatch => {
        return fetch('/api/logout')
            .then(response => response.json())
            .then(json => dispatch(logout()))
    }
}

export const setTentativeUserData = (target, value) => {
    return {
        type: SET_TENTATIVE_USER_DATA,
        target: target,
        value: value
    }
};

function recieveRegistUserResult(json) {
    return {
        type: RECIEVE_REGIST_RESULT,
        json: json
    }
}

function regist(json) {
    return {
        type: LOGIN,

    }
}

export const postTentativeUserData = () => {
    return (dispatch, getState) => {
        console.log("postTentativeUserData")
        const data = getState().tentativeUser;
        const method = 'POST';
        const body = JSON.stringify(data);
        console.dir(body);
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        return fetch('/api/userRegist', { method, headers, body })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                recieveRegistUserResult(json)
            });
    }
}
