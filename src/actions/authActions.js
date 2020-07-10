import types from "../constans/types";

const add = item => (
    {
        type:types.ADD_TOKEN,item
    }
)

const remove_token = () => (
    {
        type:types.REMOVE_TOKEN
    }
)

export default {add,remove_token}