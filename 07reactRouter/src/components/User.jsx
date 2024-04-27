import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  // Get the content after user in the url using useParam(), userId is same as that of mentioned
  const {userId} = useParams()

  return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4'>User : {userId}</div>
  )
}

export default User
