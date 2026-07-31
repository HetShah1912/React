import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <h1>Hello</h1>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    </>
  )
}

export default App
