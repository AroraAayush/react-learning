import { useEffect, useState } from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';
function App() {
  const [givenAmount,setGivenAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState("Yet to Calculate");
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [converted,setConverted]=useState(false)
  const [swapped ,setSwapped] =useState(false);
  let currencyInfo=useCurrencyInfo(from);
  let currencies=Object.keys(currencyInfo);
  // console.log(currencies)
  const swap=()=>{
    setSwapped(true);
    console.log("Swapping")
    if(typeof (convertedAmount) !='number')
      {
        setGivenAmount(0);
      }
      else{
    
setConvertedAmount(givenAmount);
    setGivenAmount(convertedAmount);
      }
    setFrom(to);
    setTo(from);
        
  }
  
  useEffect(()=>{
    console.log("useeffect started");
    if(swapped)
      {
        setSwapped(false);

      }
    else{
    setConvertedAmount("Yet to Calculate")
    setConverted(false);
    }
    
  },[givenAmount,to,from])
  const convert=()=>{
    setConverted(true);
    if(givenAmount<0)
      {
        alert("Please enter a valid amount....")
      }
    else
    {
    let calc=givenAmount*currencyInfo[to];
    setConvertedAmount(calc);
    }
  }
  console.log("now returning");
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url("https://png.pngtree.com/thumb_back/fh260/background/20220512/pngtree-growing-chart-against-the-background-of-the-usa-america-flag-candlestick-image_1298783.jpg")`, }}>
    
    <div className='w-1/3 rounded-lg h-1/2 px-10 py-3   backdrop-blur-sm bg-white/30 border-gray-60 '> 
    {/* <form 
    onSubmit={(e)=>{
      e.preventDefault();
      convert();
    }}
    > */}
    <div className='w-full text-center text-white bg-violet-700/50 rounded-lg mb-3 px-3 py-2' >CURRENCY CONVERTOR</div>
      <div className='w-full block '>
      <InputBox  labelText={"From"} amountType={"number"} amount={givenAmount} onAmountChange={(amt)=>setGivenAmount(amt)} selectedCurrency={from} onCurrencyChange={(val)=>setFrom(val)} currencies={currencies}/>   
      </div>
     <div className='flex justify-center items-center my-3 '>
      <button className='px-3 py-2 bg-sky-600 text-white rounded-md' onClick={swap}>Swap</button>
      </div>
      <div className='w-full block'>
     <InputBox labelText={"To"} amount={convertedAmount} amountType={"text"} amountDisabled={true} selectedCurrency={to} onCurrencyChange={(val)=>setTo(val)} currencies={currencies}/> 
     </div>
     <div className='w-full flex justify-center items-center'>
     <button type="submit" className={`px-3 py-2 rounded-md ${converted ? 'bg-blue-300' : 'bg-blue-600' } text-white`} disabled={converted} onClick={convert}>{converted? "Converted " : "Convert "} {from.toUpperCase()} to {to.toUpperCase()}</button>
     </div>
     
    {/* </form> */}
    </div>
    </div>
    </>
  )
}

export default App
