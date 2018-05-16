import * as fetchData from './fetchData'
import * as message from './message'

export const RECIVE_NOVEL = 'RECIVE_NOVEL'

export const fetchNovel = (novelId) => {
    return (dispatch, getState) => {
        dispatch(fetchData.request())
        fetch('/api/v1/novels/' + novelId).then(response => response.json()).then(json => {
            dispatch(reciveNovel(json));
        }).catch(err => {
            console.log(err.stack);
            dispatch(message.setMessage('アクセスできませんでした'))
        }).finally(() => {
            dispatch(fetchData.recieve())
        })
    }
}

const reciveNovel = (json) => {
    return {
        type: RECIVE_NOVEL,
        novel: json.novel
    }
}
