import React from 'react'
import {useId} from 'react'
export default function InputBox(
  {
    labelText,
    selectedCurrency,
    amount,
    onAmountChange,
    amountDisabled=false,
    onCurrencyChange,
    currencyList=[],
   
    
    
}
) {
  const inputId1=useId();
 const inputId2=useId();
 console.log("Rendering input box :")
  return (
    <div className='w-full rounded-md px-3 py-3 bg-white opacity-60 border-2 border-black flex'>
     <div className='w-1/2' >
     <label htmlFor={inputId1} className='inline-block mb-2' >{labelText}</label>
     <input type="number"  id={inputId1} value={amount} className='w-full' disabled={amountDisabled}
     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
     />
     </div>
     <div className='w-1/2 text-right justify-end'>
    
     <label  htmlFor={inputId2} className='inline-block w-full mb-2' >{"Currency"}</label>
     <select id={inputId2}  className='rounded-sm px-2 py-2  bg-gray-100 outline-none' value={selectedCurrency} 
     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
     {currencyList.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
      
     </select>
     </div>
    </div>
  )
}
