import fetch from 'cross-fetch'

export const REQUEST_USERINFO = 'REQUEST_USERINFO';
export const RECIEVE_USERINFO = 'RECIEVE_USERINFO';

function requestUserInfo() {
    return {
        type: REQUEST_USERINFO
    }
}

function recieveUserInfo(json) {
    return {
        type: RECIEVE_USERINFO,
        userInfo : json.userInfo
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
