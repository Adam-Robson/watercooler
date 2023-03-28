import React from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/Context';
import { useTodos } from '../hooks/useTodos';
import Todo from '../components/Todo';

import '../styles/styles.css';

export default function Home() {
  const { user } = userContext();

  const handleRedirect = true;

  const todos = useTodos();

  if (!user) {
    handleRedirect && <Navigate replace to='/auth/sign-in' />;
  }

  return (
    <>
      <section>
        <h2>Todos List:</h2>{
          todos.map((todo) => {
            <Todo key={ todo.id } { ...todo } />;
          }) }</section>
    </>
  );
}
