import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { useEffect, useState } from 'react'

function App() {

  
  const [theme, setTheme] = useState("light")

  const onChangeBtn = e => {
      const status = e.currentTarget.checked
      status ? setTheme("dark") : setTheme("light")
  }

  // Actual Change in Theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])
  
 return( 

    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn onChangeButton={onChangeBtn}/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
        </div>
    </div>
 )
}

export default App
