/**
 * To Do
 */
type ToDo = {
  _id: string;
  message: string;
  completed: boolean;
}

type AddToDo = Pick<ToDo, 'message'>

export type { ToDo, AddToDo };
