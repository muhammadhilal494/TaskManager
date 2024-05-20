import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTask />
      <TaskList />
    </>
  )
}

export default App