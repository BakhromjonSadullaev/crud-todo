import { ToDo } from '../../api';

/**
 * To Do State
 */
class ToDoState {
  public todos: ToDo[] = [];
  public errorMessage: string = '';
}

export { ToDoState };