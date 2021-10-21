import React from 'react';
import { Todo } from './Model';
import '../styles.css';
import SingleTodo from '../SingleTodo';

export interface Props {
  // todos is an array it is array of Todo modal
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((data) => (
        <SingleTodo
          data={data}
          key={data.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
