import React from 'react';

export default function CreateTodo({
  currentTodo,
  setCurrentTodo,
  todoList,
  setTodoList
}) {

  function addToList() {

    const newTodo = {
      id: todoList.length + 1,
      text: currentTodo,
      complete: false
    };

    const newTodoList = [newTodo, ...todoList];

    setTodoList(newTodoList);
    setCurrentTodo('');
  }
  return (
    <>
      <section>
        <form className="form" onSubmit={
          (e) => {
            e.preventDefault();
            addToList();
          } }>
          <input
            className="input"
            type="text"
            value={ currentTodo }
            onChange={
              (e) => {
                setCurrentTodo(e.target.value);
              } } />
          <input className="submit" type="submit" />
        </form>

      </section>
    </>
  );
}
