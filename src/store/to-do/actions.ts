import {
  ADD_TODO_FAIL,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  EDIT_TODO_START,
  EDIT_TODO_SUCCESS,
  GET_TODOS_FAIL,
  GET_TODOS_START,
  GET_TODOS_SUCCESS
} from './constants';
import { AddToDo, ToDo } from '../../api';

/**
 * Get to dos start
 */
const getToDosStart = () => ({
  type: GET_TODOS_START
});

/**
 * Get to dos success
 */
const getToDosSuccess = (todos: ToDo[]) => ({
  type: GET_TODOS_SUCCESS,
  payload: todos
});

/**
 * Get to dos fail
 */
const getToDosFail = (error: string) => ({
  type: GET_TODOS_FAIL,
  payload: error
});

/**
 * Add To Do Start
 */
const addToDoStart = (todo: AddToDo) => ({
  type: ADD_TODO_START,
  payload: todo
});

/**
 * Add To Do Success
 */
const addToDoSuccess = () => ({
  type: ADD_TODO_SUCCESS
});

/**
 * Add To Do Fail
 */
const addToDoFail = (error: string) => ({
  type: ADD_TODO_FAIL,
  payload: error
});

/**
 * Delete To Do Start
 */
const deleteToDoStart = (id: string) => ({
  type: DELETE_TODO_START,
  payload: id
});

/**
 * Delete To Do Success
 */
const deleteToDoSuccess = () => ({
  type: DELETE_TODO_SUCCESS
});

/**
 * Delete To Do Fail
 */
const deleteToDoFail = (error: string) => ({
  type: DELETE_TODO_FAIL,
  payload: error
});

/**
 * Edit To Do Start
 */
const editToDoStart = (todo: ToDo) => ({
  type: EDIT_TODO_START,
  payload: todo
});

/**
 * Edit To Do Success
 */
const editToDoSuccess = () => ({
  type: EDIT_TODO_SUCCESS
});

/**
 * Delete To Do Fail
 */
const editToDoFail = (error: string) => ({
  type: EDIT_TODO_FAIL,
  payload: error
});

export {
  getToDosStart,
  getToDosSuccess,
  getToDosFail,
  addToDoStart,
  addToDoFail,
  addToDoSuccess,
  deleteToDoFail,
  deleteToDoStart,
  deleteToDoSuccess,
  editToDoFail,
  editToDoStart,
  editToDoSuccess
};
