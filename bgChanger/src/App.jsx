import { useState } from "react"




function App() {
  
const [color,setColor]=useState("lavender")
  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 roundef-3xl">
      <button  onClick={()=>(setColor("red"))}className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>RED</button>
      <button onClick={()=>(setColor("blue"))} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>BLUE</button> <button onClick={()=>(setColor("grey"))} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>GREY</button> <button onClick={()=>(setColor("magenta"))} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"magenta"}}>MAGENTA</button> <button onClick={()=>(setColor("pink"))} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"PINK"}}>PINK</button> <button onClick={()=>(setColor("blue"))} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>BLUE</button>
         </div></div>
    </div>
    </>
  )
}

export default App
