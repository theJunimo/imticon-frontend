import { call, put } from 'readux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    return function *(action) {
        yield put(startLoading(type)); //로딩 시작
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            });
        } catch(e) {
            yield put({
                type: ERROR,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type)); //로딩 끝
    }
}