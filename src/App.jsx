import React from 'react';
import Todo from './components/Todo/Todo';
import './App.css';

export default function App() {
  return (
    <>

      <header
        id="header"
        style={ {
          backgroundImage: "url('./logo.svg ')"
        } }
      />
      
      <Todo />
      
    </>
  );
}
