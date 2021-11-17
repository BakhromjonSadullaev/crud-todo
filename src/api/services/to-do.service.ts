import { api } from './index';
import { AddToDo, ToDo } from '../models';

/**
 * Get To Dos
 */
const getToDosRequest = () => api.get('/todos');

/**
 * Add To Do
 */
const addToDoRequest = ({ todo }: { todo: AddToDo }) => api.post('/todos', todo);

/**
 * Delete To Do
 */
const deleteToDoRequest = (id: string) => api.delete(`/todos/${id}`);

/**
 * Edit To Do
 */
const editToDoRequest = (todo: ToDo) => api.patch(`/todos/${todo._id}`, {
  message: todo.message,
  completed: todo.completed
});

export { getToDosRequest, addToDoRequest, deleteToDoRequest, editToDoRequest };