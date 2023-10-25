import React, { useState, useEffect } from 'react'
import { deleteTodo, updateTodo } from '../services/utils'
import { Link } from 'react-router-dom'
import { RiEditLine } from 'react-icons/ri'
import { MdOutlineDeleteForever } from 'react-icons/md'

 export default function TodoCard({ todo, onDelete }) {

  async function handleDelete() {
    const {data, error} = await deleteTodo(todo.id);
    if (error) {
      console.error('There was an error while deleting the todo.')
    }
    if (data) {
      console.info(data)
      onDelete(todo.id);
    }
  }

  return (
    <div className="todo-card">
      <div>{todo.body}</div>
      <div>{todo.complete}</div>
      <div className="buttons">
        <Link to={`/${todo.id}`}>
          <RiEditLine size={30} color={'#444140'} />
        </Link>
        <MdOutlineDeleteForever size={30} color={'#444140'} onClick={handleDelete} />
      </div>
    </div>
  )
}
