import {call, put, takeLatest} from 'redux-saga/effects';
import types from "../constans/types";
import fetch_data from "../api/api";

const api_call = (dane) => fetch_data(dane)

function* logIn(action) {
    try {
        const data = [action.item.user.email,action.item.user.password]
        const api_response = yield call(api_call,{data})
        yield put({type: types.ADD_TOKEN, item: api_response.data.user.token});
    } catch (e) {
        console.error(e);
    }
}


export default function* mySaga() {
    yield takeLatest(types.LOG_IN, logIn);
}