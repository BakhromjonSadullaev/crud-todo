import { ToDoState } from './state';
import { AnyAction } from 'redux';
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

/**
 * To Do Reducer
 */
const toDoReducer = (state = new ToDoState(), action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO_START:
    case GET_TODOS_START:
    case DELETE_TODO_START:
    case EDIT_TODO_START:
    case ADD_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case EDIT_TODO_SUCCESS: {
      return {
        ...state,
        errorMessage: ''
      };
    }

    case ADD_TODO_FAIL:
    case GET_TODOS_FAIL:
    case DELETE_TODO_FAIL:
    case EDIT_TODO_FAIL: {
      return {
        ...state,
        errorMessage: payload
      };
    }

    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: payload,
        errorMessage: ''
      };
    }

    default:
      return state;
  }
};

export { toDoReducer };
