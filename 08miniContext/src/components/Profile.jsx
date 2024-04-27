import React from 'react'
import useUser from '../context/User'

function Profile() {
 
//             ***** OUTPUT ****
// Get the value from App.jsx via useUser
  const {username, password} = useUser()
  
   if(!username) return <div>Please Login!</div>
 
   return <div>Welcome {username}!</div>

}

export default Profile
