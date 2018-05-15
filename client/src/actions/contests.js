import * as fetchData from './fetchData'
import * as message from './message'

export const REQUEST_CONTEST = 'REQUEST_CONTEST'
export const RECIEVE_CONTEST = 'RECIEVE_CONTEST'

export const fetchContest = (contestId) => {
    return (dispatch, getState) => {
        dispatch(fetchData.request())
        fetch('/api/v1/contests/' + contestId).then(response => response.json()).then(json => {
            dispatch(recieveContest(json));
            console.log(json)
        }).catch(err => {
            console.log(err.stack);
            dispatch(message.setMessage('アクセスできませんでした'))
        }).finally(() => {
            dispatch(fetchData.recieve())
        })
    }
}

const recieveContest = (json) => {
    return {
        type: RECIEVE_CONTEST,
        contest: json.contest
    }
}
