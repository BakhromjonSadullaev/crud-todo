import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_TODO_START, DELETE_TODO_START, EDIT_TODO_START, GET_TODOS_START } from './constants';
import { addToDoRequest, deleteToDoRequest, editToDoRequest, getToDosRequest } from '../../api';
import {
  addToDoFail,
  addToDoStart,
  addToDoSuccess,
  deleteToDoFail,
  deleteToDoStart,
  deleteToDoSuccess,
  editToDoFail,
  editToDoStart,
  editToDoSuccess,
  getToDosFail,
  getToDosStart,
  getToDosSuccess
} from './actions';

/**
 * Get To Dos
 */
function* getToDos() {
  try {
    const response = yield call(getToDosRequest);

    yield put(getToDosSuccess(response.data.data.todos));
  } catch (err: any) {
    yield put(getToDosFail(err.message));
  }
}

/**
 * Add To Do
 */
function* addToDo({ payload }: ReturnType<typeof addToDoStart>) {
  try {
    yield call(addToDoRequest, { todo: payload });

    yield put(addToDoSuccess());
    yield put(getToDosStart());
  } catch (err: any) {
    yield put(addToDoFail(err.message));
  }
}

/**
 * Delete To Do
 */
function* deleteToDo({ payload }: ReturnType<typeof deleteToDoStart>) {
  try {
    yield call(deleteToDoRequest, payload);

    yield put(deleteToDoSuccess());
    yield put(getToDosStart());
  } catch (err: any) {
    yield put(deleteToDoFail(err.message));
  }
}

/**
 * Edit To Do
 */
function* editToDo({ payload }: ReturnType<typeof editToDoStart>) {
  try {
    yield call(editToDoRequest, payload);

    yield put(editToDoSuccess());
    yield put(getToDosStart());
  } catch (err: any) {
    yield put(editToDoFail(err.message));
  }
}

/**
 * To Do Saga
 */
function* toDoSaga() {
  yield takeEvery(GET_TODOS_START, getToDos);
  yield takeEvery(ADD_TODO_START, addToDo);
  yield takeEvery(DELETE_TODO_START, deleteToDo);
  yield takeEvery(EDIT_TODO_START, editToDo);
}

export { toDoSaga };
