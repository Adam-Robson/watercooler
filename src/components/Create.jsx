import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { insertTodo } from '../services/utils'
export default function Create() {
  const [body, setBody] = useState('')
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    if (!body) {
      setError('Please add text to your todo!')
      return
    }

    const newTodo = {
      body,
      complete
    }

    const { data, error } = await insertTodo(newTodo);

    if (error) {
      setError('There was an error inserting a row to the database.')
      console.error(error.message);
    }

    if (data) {
      console.info(data);
      setError(null);
      navigate("/")
    }
  }

  return (
    <div className='page'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="body">body</label>
          <input
            type="text"
            className="body"
            value={body}
            name="body"
            onChange={e => setBody(e.target.value)}
          />

        <label htmlFor="complete" className="complete">complete</label>
          <input
            type="checkbox"
            name="complete"
            className='checkbox'
            value={complete}
            onChange={e => setComplete(e.target.value)}
            onClick={() => setComplete(!complete)}
          />

        <button>Create Todo</button>
      </form>
      {error && <div className='error-card'><p className="error">{ error }</p></div>}

    </div>
  )
}
