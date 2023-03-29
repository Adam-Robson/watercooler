import React from 'react';
import CreateTodo from './CreateTodo';

export default function Todo({
  todoList,
  setTodoList,
  currentTodo,
  setCurrentTodo,
}) {

  function toggleComplete(id) {
    const newTodoList = todoList.map(
      (todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return { ...todo };
        }
      });

    setTodoList(newTodoList);
  }

  return (
    <>
      <section className="container">
        <CreateTodo
          todoList={ todoList }
          setTodoList={ setTodoList }
          currentTodo={ currentTodo }
          setCurrentTodo={ setCurrentTodo }
        />
        <h2 className="next">next:</h2>
        <ul>
          {
            todoList.map((todo) => {
              if (!todo.complete) {
                return (
                  <li key={ todo.id }>
                    <input
                      type="checkbox"
                      onClick={ () => toggleComplete(todo.id) }
                    />{ todo.text }</li>
                );
              } else {
                return null;
              }
            })
          }
        </ul>
        <h2 className="completed">completed:</h2>
        <ul>
          {
            todoList.map((todo) => {
              if (todo.complete) {
                return (
                  <li key={ todo.id }>
                    <input
                      type="checkbox"
                      checked="checked"
                      onClick={ () => toggleComplete(todo.id) }
                    />{ todo.text }</li>
                );
              } else {
                return null;
              }
            }) }
        </ul>
        <button onClick={ () => setTodoList([]) }>clear</button>
      </section>
    </>
  );
}
