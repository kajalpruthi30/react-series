import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full min-h-screen duration-200"style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white px-3 py-2" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
          <button className="outline-none hover-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
