import { useState,useEffect } from "react";


function useCurrencyInfo(currency)
{
    console.log("Use currency Info hook called ")
    const [response,setResponse]= useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=> setResponse(res[currency]))
},[currency])
    return response
}


export default useCurrencyInfo;