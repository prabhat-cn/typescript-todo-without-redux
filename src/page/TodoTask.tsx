import React, { useState } from 'react';
import InputField from './InputField';
import { Todo } from './model/Model';
import TodoList from './model/TodoList';

const TodoTask: React.FC = () => {
  // if use multiple type
  // const [todo, setTodo] = useState<string | number>();
  // const [todo, setTodo] = useState<string[]>();
  const [todo, setTodo] = useState<string>('');
  // console.log('value->', todo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      // after submit input field blank
      setTodo('');
    }
  };

  console.log('allTodo->', todos);

  return (
    <div>
      <div className="header">
        <h2 style={{ textAlign: 'center' }}>Taskify</h2>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoTask;
