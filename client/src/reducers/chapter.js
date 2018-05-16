import * as Actions from '../actions/chapter'

const chapter = (state = {
    title: "",
    content: '',
    accessCount: 0,
    acceptComment: true
}, action) => {
    switch (action.type) {
        case Actions.RECIVE_CHAPTER:
            return action.chapter
        default:
            return state


    }
}
export default chapter
