import TokenReducer from "./reducers/auth";
import ArticleReducer from "./reducers/article_reducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    auth: TokenReducer,
    articles_list: ArticleReducer,
});

export default rootReducer;