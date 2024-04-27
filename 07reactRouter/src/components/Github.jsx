import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

  // ****** METHOD - 1
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users')
  //     .then(res => res.json())
  //     .then(res => { setData(res);
  //                   console.log(res)
  //   })
  // }, []);

  // ****** METHOD-2 via Loader
  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
      <h2>Github Members:</h2>
        {data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))} 
    </div>
  );
}

export default Github;


// Optimized Approach of fetching Api via loader
export const githubApiLoader = async() => {
  const response = await fetch('https://api.github.com/users');
  return response.json()
}
