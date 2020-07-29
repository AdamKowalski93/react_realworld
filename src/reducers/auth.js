import types from "../constans/types";



const INITIAL_STATE = {
    token: null,
    token_value: null
}


const TokenReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_TOKEN:
            return {...state, token: true,token_value: action.item}

        case types.REMOVE_TOKEN:
            return {...state, token: null,token_value: null}
        default:
            return state
    }
}

export default TokenReducer