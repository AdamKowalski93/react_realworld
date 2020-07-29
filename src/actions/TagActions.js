import types from "../constans/types";

const add_tag = item => (
    {
        type:types.ADD_TAGS,item
    }
)

const remove_tag = () => (
    {
        type:types.REMOVE_TAGS
    }
)

export default {add_tag,remove_tag}