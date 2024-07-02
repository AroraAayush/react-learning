import React from 'react'
import { useId } from 'react'
function InputBox({
    labelText,
    amount,
    onAmountChange,
    amountDisabled=false,
    selectedCurrency,
    onCurrencyChange,
    currencies,
    amountType
    
})


{
  const inputId1=useId();
  return (
    <div className='w-full rounded-md px-3 py-3 mb-4 bg-white opacity-60 border-2 border-black flex '>
        <div className='w-1/2'>
              <label htmlFor="inputId1" className='inline-block mb-1'>{labelText}</label>
      <input type={amountType} className='w-full' name="inputId1" id="inputId1" value={amount} disabled={amountDisabled} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
      </div>
      <div className='w-1/2  text-right justify-end'>
       
      <label htmlFor=""  className=' inline-block w-full mb-2'>{"Currency"}</label>
     <select id="" className=' w-1/2' value={selectedCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
      {currencies.map((currency)=><option key={currency} value={currency}>
                            {currency}
                            </option>)}
     </select>
      </div> 
    </div>

    
  )
}

export default InputBox
