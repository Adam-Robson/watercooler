import React, { useState } from 'react';
import Todo from './Todo';

export default function Home() {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <section>
        <Todo
          todoList={ todoList }
          setTodoList={ setTodoList }
          currentTodo={ currentTodo }
          setCurrentTodo={ setCurrentTodo }
        /> 
      </section>
    </>
  );
}
