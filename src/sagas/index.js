import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchPosts() {
  const json = yield fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json() );    

  yield put({ type: "FETCH_POSTS_SUCCESS", json: json });
}

function* actionWatcher() {
     yield takeLatest('FETCH_POSTS', fetchPosts)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}