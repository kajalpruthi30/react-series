import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let data1 = {
    username : "_kajalpruthi",
    age: 21
  }

  let data2 = {
    username : "_sonalipruthi",
    age: 22
  }


  return (
    <>
      <h1 className='bg-green-300 p-2 rounded mb-5'>Tailwind test</h1>
      <Card name="Kajal" age={data1.age}/>
      <Card name="Sonali" age={data2.age}/>
    </>
  )
}

export default App
