import React, { useState} from 'react'
import useUser from '../context/User';

function Login() {

  // Getting username and password from useUser
  const { setUsername, setPassword } = useUser();
  
  // Creating  local values
  const [localUsername, setLocalUsername] = useState("");
  const [localPassword, setLocalPassword] = useState("");

  // Sending the data
    const handleSubmit = (e) => {
        e.preventDefault()

        // Changing username and password 
        setUsername(localUsername);
        setPassword(localPassword);
    }

  return (
    <div>
        <h2>LOGIN</h2>
        <input type='text' placeholder='username' value={localUsername} onChange={e => setLocalUsername(e.target.value)}/>{" "}
        <input type='password' placeholder='password' value={localPassword} onChange={e => setLocalPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
