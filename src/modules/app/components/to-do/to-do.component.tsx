import React, { ChangeEvent, useState } from 'react';
import { ToDo } from '../../../../api';
import '../../../../styles/style.css';

/**
 * To Do Props
 */
type ToDoProps = {
  todo: ToDo;
  onClick: (id: string) => void;
  onEditClick: (todo: ToDo) => void;
};

/**
 * To Do
 */
const ToDoComponent: React.FC<ToDoProps> = ({ todo, onClick, onEditClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.message);
  const [completed, setCompleted] = useState(todo.completed);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSaveClick = () => {
    onEditClick({ _id: todo._id, message: value, completed });
    setIsEditing(false);
  };

  const onStatusClick = () => {
    if (!isEditing) alert('Please hit the edit button!');
    if (!isEditing) return;

    setCompleted(!completed);
  };

  return (
    <div className="todo-component">
      {isEditing ? (
        <input type="text" value={value} onChange={onChange} />
      ) : (
        <p>{todo.message}</p>
      )}
      <p style={{ cursor: 'pointer' }} onClick={onStatusClick}>
        completed: {`${completed}`}
      </p>
      <button className="delete-button" onClick={() => onClick(todo._id)}>
        Delete
      </button>
      {!isEditing && (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
      {isEditing && (
        <button className="save-btn" onClick={onSaveClick}>
          Save
        </button>
      )}
    </div>
  );
};

export { ToDoComponent };
