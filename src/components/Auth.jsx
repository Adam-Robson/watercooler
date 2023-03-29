import React, { useState } from 'react';
import { NavLink, Navigate, useParams, useLocation } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { authUser } from '../services/auth';

export default function Auth() {
  const { type } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRedirect = true;
  
  const { user, setUser } = useUserContext();

  const location = useLocation();

  async function handleAuth() {
    const response = await authUser(email, password, type);
    setUser(response);
    setEmail('');
    setPassword('');
    location.pathname = '/home';
  }

  if (user) {
    handleRedirect && <Navigate replace to='/' />;
  }

  return (
    <>
      <section className="auth-form">

        <article className="navlinks">

          <NavLink
            className="navlink"
            to="/auth/sign-in"
          >sign-in</NavLink>
          
          <NavLink
            className="navlink"
            to="/auth/sign-up"
          >sign-up</NavLink>
          
        </article>

        <article className="auth-inputs">

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