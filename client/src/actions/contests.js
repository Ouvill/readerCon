import * as fetchData from './fetchData'
import * as message from './message'

export const REQUEST_CONTEST = 'REQUEST_CONTEST'
export const RECIEVE_CONTEST = 'RECIEVE_CONTEST'
export const RECIVE_CONTEST_LIST = 'RECIVE_CONTEST_LIST'

export const FILTER = {
    ENTRY_ACCEPTING: 'entryAccepting',
    VOTE_ACCEPTING: 'voteAccepting',
    PAST_CONTESTS: 'pastContests'
}


const fetchContestList = (filter) => {
    return (dispatch, getState) => {
        dispatch(fetchData.request())
        fetch('/api/v1/contests/' + filter).then(response => response.json()).then(json => {
            dispatch(recieveContestList(json));
            console.log(json)
        }).catch(err => {
            console.log(err.stack);
            dispatch(message.setMessage('アクセスできませんでした'))
        }).finally(() => {
            dispatch(fetchData.recieve())
        })
    }
}

export const fetchEntryAcceptingContestList = () => {
    return (dispatch) => {
        return dispatch(fetchContestList(FILTER.ENTRY_ACCEPTING))
    }
}

export const fetchVoteAcceptingContestList = () => {
    return (dispatch) => {
        return dispatch(fetchContestList(FILTER.VOTE_ACCEPTING));
    }
}


export const fetchPastContestList = () => {
    return (dispatch) => {
        return dispatch(fetchContestList(FILTER.PAST_CONTESTS));
    }
}

const recieveContestList = (json) => {
    return {
        type: RECIVE_CONTEST_LIST,
        contests: json.contests
    }
}

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
