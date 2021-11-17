import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToDoStart,
  deleteToDoStart,
  editToDoStart,
  getToDosStart,
} from '../../store/to-do';
import { State } from '../../store';
import { ToDoComponent } from './components';
import { ToDo } from '../../api';
import '../../styles/style.css';

/**
 * App
 */
const App = () => {
  const dispatch = useDispatch();

  const { todos, errorMessage } = useSelector((state: State) => state.todo);

  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onAddClick = () => {
    dispatch(addToDoStart({ message: value }));
  };

  const onDeleteClick = (id: string) => {
    dispatch(deleteToDoStart(id));
  };

  const onEditClick = (todo: ToDo) => {
    dispatch(editToDoStart(todo));
  };

  useEffect(() => {
    dispatch(getToDosStart());
  }, []);

  return (
    <div className="app-wrapper">
      <div className="todo-container">
        <div>
          <input
            placeholder="Add your todo..."
            className="todo-input"
            type="text"
            value={value}
            onChange={onChange}
          />
          <button className="add-btn" onClick={onAddClick}>
            Add
          </button>
        </div>
        {!!errorMessage && <p>{errorMessage}</p>}
        {todos.map((todo) => (
          <ToDoComponent
            key={todo._id}
            todo={todo}
            onClick={onDeleteClick}
            onEditClick={onEditClick}
          />
        ))}
      </div>
    </div>
  );
};

export { App };
