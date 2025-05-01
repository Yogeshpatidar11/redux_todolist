import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  

  return (
    <>
      <div>
      <h1>Todo List</h1>
      <TodoList />
      </div>
      
    </>
  )
}

export default App
