import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const name = "Kajal"
  return(
    <div>My name is {name}</div>
  )
}

const element = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'Created react element'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <MyApp/>
    {element}
  </>
)
