import * as Actions from '../actions/novel'

const novel = (state = {
    title: "",
    overview: "",
    author: {},
    chapters: []
}, action) => {
    switch (action.type) {
        case Actions.RECIVE_NOVEL:
            return action.novel
        default:
            return state
    }
}

export default novel
