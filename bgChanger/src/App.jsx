import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-xl"
            onClick={()=> setColor("red")}
            style={{backgroundColor: "red"}}>
              red
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-xl"
            onClick={()=> setColor("blue")}
            style={{backgroundColor: "blue"}}>
              blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-xl"
            onClick={()=> setColor("purple")}
            style={{backgroundColor: "purple"}}>
              purple
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-xl"
            onClick={()=> setColor("yellow")}
            style={{backgroundColor: "yellow"}}>
              yellow
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-xl"
            onClick={()=> setColor("pink")}
            style={{backgroundColor: "pink"}}>
              pink
            </button>
        </div>
      </div>

    </div>
  )
}

export default App
