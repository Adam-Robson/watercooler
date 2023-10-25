import React, { useState, useEffect } from 'react'
import { useParams, useNavigate }from 'react-router-dom'
import { updateTodo, getTodoById } from '../services/utils';
export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [body, setBody] = useState('');
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault()

    if (!body) {
      setError('Please add text to the todo.')
      return
    }
    setBody(body);
    setComplete(complete)
    const { data, error } = await updateTodo(id, {body, complete});

    if (error) {
      console.error(error.message);
      setError('there was an error updating the todo.')
    }

    if (body) {
      console.info(data);
      setError(null);
      navigate('/');
    }

  }


  useEffect(() => {
    async function fetchTodo() {
      const { data, error } = await getTodoById(id);
      if (error) {
        navigate("/", { replace: true })
      }
      if (data) {
        setBody(data.body);
        setComplete(data.complete);
      }
    }
    fetchTodo();
  }, [id, navigate])

  return (
    <div>
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

        <button>Update Todo</button>
      </form>
      {error && <div className="error">error</div>}
    </div>
  )
}
