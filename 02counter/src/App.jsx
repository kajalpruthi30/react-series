import { useState } from 'react'
import './App.css'

function App() {

  //                        ******* USING JAVASCRIPT *******

  // let counter = 5;

  // const addValue = () => {
  //   counter = counter + 1
  //   document.getElementById('value').innerHTML = `Counter Value: ${counter}`
  // }

  // const subValue = () => {
  //   counter = counter - 1
  //   document.getElementById('value').innerHTML = `Counter Value: ${counter}`
  // }


  //                        ******* USING REACT *******

  // let [counter, setCounter] = useState(5)

  // const addValue = () => {

  //   if(counter < 20){
  //     setCounter(counter + 1)
  //   }
  // }

  // const subValue = () => {

  //   if(counter > 0){
  //     setCounter(counter + 1)
  //   }
  // }


  //                ********   INTERVIEW QUESTION - PROBLEM   **********


  let [counter, setCounter] = useState(5)

  const addValue = () => {

      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
  }

  const subValue = () => {

    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
    }
  }


  return (
    <>
     <h2 id='value'>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add</button>
     <br/>
     <button onClick={subValue}>Subtract</button>
    </>
  )
}

export default App
