import types from "../constans/types";

const INITIAL_STATE = {
    token: ''
}

const TokenReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_TOKEN:
            return {...state, token: action.item}

        case types.REMOVE_TOKEN:
            return {...state, token: ''}
        default:
            return state
    }
}

export default TokenReducer