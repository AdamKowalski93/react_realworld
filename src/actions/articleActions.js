import types from "../constans/types";

const add_article = item => (
    {
        type:types.ADD_ARTICLES,item
    }
)

const remove_article = () => (
    {
        type:types.REMOVE_ARTICLES
    }
)

export default {add_article,remove_article}