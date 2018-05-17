import * as fetchData from './fetchData'
import * as message from './message'

export const RECIVE_NOVEL = 'RECIVE_NOVEL'

export const fetchNovel = (novelId) => {
    return (dispatch, getState) => {
        dispatch(fetchData.fetchApiAction('/api/v1/novels/' + novelId, fetchData.GET_METHOD, {}, reciveNovel));
    }
}

const reciveNovel = (json) => {
    return {
        type: RECIVE_NOVEL,
        novel: json.novel
    }
}
