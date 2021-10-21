import React, { useEffect, useRef, useState } from 'react';
import { Todo } from './model/Model';
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import TodoList from './model/TodoList';

type Props = {
  data: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  key: number;
  // isDone: boolean;
};

const SingleTodo: React.FC<Props> = ({ data, todos, setTodos, key }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(data.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todoData) =>
        todoData.id === id
          ? { ...todoData, isDone: !todoData.isDone }
          : todoData
      )
    );
  };

  const handleEdit = (id: number) => {
    if (!edit && !data.isDone) {
      setEdit(!edit);
    }
  };

  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todoValue) =>
        todoValue.id === id ? { ...data, data: editTodo } : data
      )
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((delTodo) => delTodo.id !== id));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <div>
      {/* <li style={{ listStyle: 'none' }}>
        {data.todo} &nbsp;{' '}
        {data && data.isDone == false ? (
          <span style={{ color: 'yellow' }}>{'-> '}Not Completed</span>
        ) : (
          <span style={{ color: 'Black' }}>{'-> '}Completed</span>
        )}
      </li> */}
      <form
        className="todos__single"
        onSubmit={(e) => handleEditSubmit(e, data.id)}
      >
        {/* edit mode is on */}
        {/* 'todos__single--text' bemp convention class */}
        {edit ? (
          <input
            ref={inputRef}
            type="input"
            className="todos__single--text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : data.isDone ? (
          <>
            <span className="todos__single--text">{data.todo}</span>
          </>
        ) : (
          <span className="todos__single--text">{data.todo}</span>
        )}
        {data && data.isDone == false ? (
          <span style={{ color: 'yellow' }}>{'-> '}Not Completed</span>
        ) : (
          <span style={{ color: 'Black' }}>{'-> '}Completed</span>
        )}

        {/* {data.isDone ? (
          <>
            <span className="todos__single--text">{data.todo}</span>
          </>
        ) : (
          <span className="todos__single--text">{data.todo}</span>
        )}
        {data && data.isDone == false ? (
          <span style={{ color: 'yellow' }}>{'-> '}Not Completed</span>
        ) : (
          <span style={{ color: 'Black' }}>{'-> '}Completed</span>
        )} */}

        <div>
          <span className="icon" onClick={() => handleEdit(data.id)}>
            <AiFillEdit />
          </span>
          <span className="icon" onClick={() => handleDelete(data.id)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => handleDone(data.id)}>
            <AiOutlineCheck />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
