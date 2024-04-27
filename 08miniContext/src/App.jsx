import './App.css'
import { UserProvider} from './context/User'
import Login from './components/Login'
import Profile from './components/Profile'
import { useState } from 'react'


function App() {

  // Passing in App
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  return (
    <>
      <UserProvider value={{ username, password, setUsername, setPassword }}>
        <Login/>
        <Profile/>
      </UserProvider>
    </>
  )
}

export default App
