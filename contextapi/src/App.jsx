import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>Learning Context API</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App
