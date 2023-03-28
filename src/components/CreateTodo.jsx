import React, { useState } from 'react';
import { Navigate, useHistory } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import { createTodo } from '../services/utils';


export default function CreateTodo() {
  const [text, setText] = useState('');
  const [complete, setComplete] = useState(false);
  
  const handleRedirect = true;

  const { user } = userContext();

  const history = useHistory();

  if (!user) {
    handleRedirect && <Navigate replace to='/auth/sign-in' />;
  }

  async function handleSubmit() {
    const text = await createTodo(
      user.id,
      text,
      complete
    );
    history.push('/');
  }

  return (
    <>
      <section>
        <h2>what&apos;s on your mind?</h2>
        <form onSubmit={ async (e) => {
          e.preventDefault();
          await handleSubmit();
        } }>
          <label
            htmlFor="text"
          >todo:
            <input
              id="text"
              value={ text }
              type="text"
              onChange={ (e) => setText(e.target.value) }
            />
          </label>
          <label
            htmlFor="checkbox"
          >complete:
            <input
              id="checkbox"
              value={ complete }
              type="checkbox"
              onChange={ (e) => setComplete(e.target.value) }
            />
          </label>
          <input
            type="submit"
            value="keep"
          />
        </form>
      </section>
    </>
  );
}
