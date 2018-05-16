import * as fetchData from './fetchData'
import * as message from './message'

export const RECIVE_CHAPTER = 'RECIVE_CHAPTER'

export const fetchChapter = (novelId, chapterNum) => {
    return (dispatch, getState) => {
        dispatch(fetchData.request())
        fetch('/api/v1/novels/' + novelId + '/chapters/' + chapterNum).then(response => response.json()).then(json => {
            dispatch(reciveChapter(chapterNum, json));
        }).catch(err => {
            console.log(err.stack);
            dispatch(message.setMessage('アクセスできませんでした'))
        }).finally(() => {
            dispatch(fetchData.recieve())
        })
    }
}

const reciveChapter = (chapterNum, json) => {
    return {
        type: RECIVE_CHAPTER,
        chapterNum: chapterNum,
        chapter: json.chapter
    }
}
