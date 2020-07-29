import types from "../constans/types";

const INITIAL_STATE = {
    Tags: []
}

const TagReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_TAGS:
            const articles=[...state.Tags, ...action.item]
            return {...state, Tags:articles}

        case types.REMOVE_TAGS:
            return {...state, Tags: []}
        default:
            return state
    }
}

export default TagReducer