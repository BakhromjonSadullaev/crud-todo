import { all, call } from 'redux-saga/effects';
import { toDoSaga } from './to-do';

/**
 * Root Saga
 */
function* rootSaga() {
  yield all([call(toDoSaga)]);
}

export { rootSaga };
