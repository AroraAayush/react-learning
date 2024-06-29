
import { useState ,useCallback,useEffect, useRef} from 'react';
import './App.css'

function App() {
 const [length,setLength]=useState(6);
 const [numbersAllowed,setNumbersAllowed]=useState(false);
 const [charactersAllowed,setCharactersAllowed]=useState(false);
 const [password,setPassword]=useState("");
 const [copied,setCopy]=useState(false)
//  const [copyText,setCopyText]=useState("copy")
 const passRef=useRef(null)


 const passwordGenerate=useCallback(()=>{
  let pass="";
  let template="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numbers="0123456789";
  let specials="!@#$%^&*()_?><:{}";

  if(numbersAllowed)
    {
      console.log("Chekcing if numbers allowed");
    template+=numbers;
    }
  if(charactersAllowed)
    {
      console.log("checking if special chars allowed");
    template+=specials;
    }
  for(let i=0;i<length;i++)
    {
      let rnd= Math.floor(Math.random()*template.length);
      pass+=template.charAt(rnd);
    }
    setPassword(pass);
    setCopy(false);
    // setCopyText("copy");

 },[password,length,numbersAllowed,charactersAllowed]);

 const copyPasswordToClipBoard=useCallback(()=>{
  // setCopyText("copied");
  setCopy(true);
  console.log(passRef.current);
  passRef.current?.select();
  // passRef.current?.setSelectionRange(0,6)
  window.navigator.clipboard.writeText(password);
 },[password])
useEffect(()=>{
passwordGenerate()
},[charactersAllowed,numbersAllowed,length])

  return (
    <>
      <div className="max-w-xl  mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h3 className='text-center mb-4 font-bold text-2xl'>Password Generator</h3>
        <div className='flex rounded-md bg-white overflow-hidden mb-4'>
          <input type="text" value={password} ref={passRef}readOnly className='px-4 py-2 w-full rounded-tl-md rounded-bl-md border-none font-semibold'/>
          <button className={`text-black px-4 py-2 shrink-1 rounded-tr-md rounded-br-md ${copied?'bg-sky-200': 'bg-sky-500'}`}  disabled={copied?true : false} onClick={copyPasswordToClipBoard} > {copied? "copied" : "copy"}</button>
          </div>  
          <div className='flex rounded-md overflow-hidden mb-4 gap-x-5 text-base'>
          <div className='flex items-center gap-x-2'>
            <input type="range" max={100} min={0} value={length} 
            onChange={(e)=>{
              setLength(e.target.value)
            }}  className='mr-3' />
            
            <label className='mr-4'>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={numbersAllowed}
               onChange={()=>{
                setNumbersAllowed(prev=> !prev);
               }}
               />
            <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-2'>
            
             <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="characterInput"
              onChange={() => {
                  setCharactersAllowed((prev) => !prev )
              }}
          />
            <label >Special Characters</label>
            </div>
            
            </div>   
      </div>
    </>
  )
}

export default App
