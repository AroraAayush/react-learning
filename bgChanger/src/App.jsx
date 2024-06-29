import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState("white")
  const changeBackground=(color)=>{
    const innerFunc=()=>{
      setColor(color);
    }
    return innerFunc;
  }
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <h2 style={{textAlign:'center'}}>BackGround Changer</h2>    
    <div className="box" >
      <h3>Color Pallete</h3>
      <button className="btn" id="orange" onClick={changeBackground("orange")}>Orange</button>
      <button className="btn" id="green" onClick={changeBackground("green")}>Green</button>
      <button className="btn" id="blue" onClick={changeBackground("blue")}>Blue</button>
      <button className="btn" id="red" onClick={changeBackground("red")}>Red</button>
      <button className="btn" id="pink" onClick={changeBackground("pink")}>Pink</button>
    </div>
    </div>
    </>
  )
}

export default App
