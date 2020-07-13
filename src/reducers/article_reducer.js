import types from "../constans/types";

const INITIAL_STATE = {
    Articles: []
}

const ArticleReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ARTICLES:
            const articles=[...state.Articles, ...action.item]
            return {...state, Articles:articles}

        case types.REMOVE_ARTICLES:
            console.log(action)
            return {...state, Articles: []}
        default:
            return state
    }
}

export default ArticleReducer