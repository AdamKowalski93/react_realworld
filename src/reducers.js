import TokenReducer from "./reducers/auth";
import ArticleReducer from "./reducers/article_reducer";
import {combineReducers} from "redux";
import TagReducer from "./reducers/tag_reducer";

export const rootReducer = combineReducers({
    auth: TokenReducer,
    articles_list: ArticleReducer,
    tags_list:TagReducer
});

export default rootReducer;