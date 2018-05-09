import { push } from 'react-router-redux'
import * as message from './message'
import * as fetchData from './fetchData'

export const REGIST = 'REGIST'
export const tryRegist = (userName, displayName, email, password) => {
    return (dispatch, getState) => {
        dispatch(fetchData.request())
        const body = JSON.stringify({
            userName,
            displayName,
            email,
            password
        });
        const method = 'POST'
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        fetch('/api/userRegist', { method, headers, body }).then(response => response.json()).then(json => {
            if (json.result) {
                dispatch(push('/login'));
                dispatch(message.setMessage('ユーザー登録が完了しました。ログインしてください。'));
            } else {
                dispatch(message.setMessage(json.messageJa));
            }
            dispatch(fetchData.recieve());
        }).catch(err => {
            console.log(err);
            dispatch(message.setMessage('ユーザー登録に失敗しました'))
            dispatch(fetchData.recieve());
        })
    }
}
