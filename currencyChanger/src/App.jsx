
import { useCallback, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [givenAmount,setAmount] =useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState('inr');
  const currencyInfo=useCurrencyInfo(from);
  // console.log(currencyInfo);
  const options=Object.keys(currencyInfo);

  const convert=()=>{
    setConvertedAmount(currencyInfo[to]*givenAmount);
  }
  const swap=()=>{
   
    
    setFrom(to);
    setTo(from);

    setAmount(convertedAmount);
    
    setConvertedAmount(givenAmount);
  }

  return (
    <>
    <div className='w-full h-screen  flex justify-center items-center'  style={{ 
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20220512/pngtree-growing-chart-against-the-background-of-the-usa-america-flag-candlestick-image_1298783.jpg")`, opacity:0.6
    }}>
    <div className="bg-slate-100 shadow-md border-solid  rounded-md w-1/2  flex flex-wrap items-center justify-center ">
    <form
    onSubmit={(e)=>{
      e.preventDefault();
      convert();
    }}>
    
      <div className='w-full mx-3 my-5 '>
        <InputBox labelText={"From"} selectedCurrency={from} amount={givenAmount} onAmountChange={(givenAmount)=>setAmount(givenAmount)}  onCurrencyChange={(currency=>setFrom(currency))} currencyList={options}/>
      </div>
      <div className='w-full flex justify-center '>
<button className='bg-blue-600 text-white rounded-md px-3 py-2 min-w-11 max-w-full  text-center 'onClick={swap}>Swap</button>
</div>
      <div className='w-full mx-3 my-5 '>
        <InputBox labelText={"To"} amount={convertedAmount} selectedCurrency={to} amountDisabled={true}  currencyList={options} onCurrencyChange={(currency=>setTo(currency))} />
      </div>
      <div className='w-full flex justify-center '>
      <button type='submit' className='bg-blue-600 text-white rounded-md px-3 py-2 min-w-11 max-w-full mb-4 text-center '>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
      
      </form>
    </div>
    </div>
    
    </>
    
  )
}

export default App
