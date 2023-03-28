import React, { useState } from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { authUser } from '../services/auth';

export default function Auth() {
  const { type } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRedirect = true;
  
  const { user, setUser } = useUserContext();

  async function handleAuth() {
    const response = await authUser(email, password, type);
    setUser(response);
    setEmail('');
    setPassword('');
  }

  if (user) {
    handleRedirect && <Navigate replace to='/' />;
  }

  return (
    <>
      <section>

        <article>

          <NavLink
            className="navlink"
            to="/auth/sign-in"
            activeClassName="is-active"
          >sign-in</NavLink>
          
          <NavLink
            className="navlink"
            to="/auth/sign-up"
            activeClassName="is-active"
          >sign-up</NavLink>
          
        </article>

        <article>

          <label>email
            <input
              className="input"
              type="email"
              placeholder="name@example.com"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
          
          <label>password
            <input
              className="input"
              type="password"
              placeholder="******"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>

          <input
            onClick={ handleAuth }
            type="submit"
            value="submit"
          />
          
        </article>
      </section>
    </>
  );

}