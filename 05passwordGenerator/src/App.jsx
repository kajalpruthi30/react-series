import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() { 

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // 1. Generate the password - using random number within the given length
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*={[]}~`-+_"
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


  // 2. useEffect will run whenever the page loads or when there's a change in dependencies
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  // *OPTIONAL - *Added reference to the password using useRef hook to add addtional changes in the text 
  const passwordRef = useRef(null)

  // 3. Function to copy the values
  const copyPassToClick = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 mt-40 py-5'>

        <h1 className='text-xl text-center text-white my-3 py-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          {/* Passing reference to the text to use additional features like select */}
          <input type='text' value={password} className='outline-none w-full py-2 px-3' placeholder='Password!' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassToClick}>Copy</button>
        </div>

        <div className='flex test-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={32} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 px-5'>
              <input type='checkbox' defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)}/>
              <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 px-2'>
              <input type='checkbox' defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)}/>
              <label>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
