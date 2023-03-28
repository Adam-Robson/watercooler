import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { useTodos } from '../hooks/useTodos';
import Todo from './Todo';

export default function Home() {
  const { user } = useUserContext();

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
