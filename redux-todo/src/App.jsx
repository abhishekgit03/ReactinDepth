import { useState } from 'react'
import { useSelector} from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
