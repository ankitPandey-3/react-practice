import { useState } from "react";

function App(){
  const [color, setColor] = useState("olive")


  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 w-400px bg-white">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor: "red"}}
          onClick={()=>{setColor("red")}} >Red</button>
        </div>

        <div className="flex  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor: "blue"}}
          onClick={()=>{setColor("blue")}}>Blue</button>
        </div>

        <div className="flex  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor: "green"}}
          onClick={()=>{setColor("green")}}>Green</button>
        </div>

        <div className="flex  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-3xl shadow-lg text-black"
          style={{backgroundColor: "yellow"}}
          onClick={()=>{setColor("yellow")}}>Yellow</button>
        </div>

        <div className="flex  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor: "black"}}
          onClick={()=>{setColor("black")}}>Black</button>
        </div>
      </div>

    </div>
  )
}

export default App;