import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(10);
 const handleIncrement=()=>{
  
  if(counter<20)
    {
      // counter=counter+1;
  setCounter(counter+1); 
  console.log(`Incremented counter to ${counter}`);
    }
 }
 const handleDecrement=()=>{
  
  if(counter>0)
    {
      // counter=counter-1;
  setCounter(counter-1);
  console.log(`Decremented counter to ${counter}`);
    }
  
 }
 const handleMultipleIncrement=()=>{
  

  //only last expression gets executed as all three expressions are working on same counter value so because of React Fiber , no immediate change so only last one gets executed
  // setCounter(counter+1);
  // setCounter(counter*2);
  // setCounter(counter+3); 

  setCounter((prevCounter)=>{
    console.log("First incremented executed");
    return prevCounter+1});
  setCounter((prevCounter)=>{
    console.log("2nd incremented executed");
    return prevCounter+1});
  setCounter((prevCounter)=>{
    console.log("Last incremented executed");
    return prevCounter+1});
  console.log(`Incremented counter to ${counter}`);
    
 }
 const handleMultipleDecrement=()=>{
  // counter=counter-1;
  setCounter((prevCounter)=>prevCounter-1);
  setCounter((prevCounter)=>prevCounter-1);
  setCounter((prevCounter)=>prevCounter-1);
  console.log(`Decremented counter to ${counter}`);
    
  
 }



  return (
    <>
    <h1>This is a Counter Project </h1>
    <h3>Counter : {counter}</h3>
    <button id="increment" onClick={handleIncrement}>Increment</button>
    <br />
    <button id="decrement" onClick={handleDecrement}>Decrement</button>
    <br />
    <button id="increment3" onClick={handleMultipleIncrement}>Increment</button>
    <br />
    <button id="decrement3" onClick={handleMultipleDecrement}>Decrement</button>

    </>
  )
}

export default App
