import React from 'react'
import {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData]=useState({})
    // useEffect(() => {
      
    // fetch(`https://api.github.com/users/aayusharora`).then((res)=>res.json()).then((res)=>setData(res));
      
    // }, [])
    const data= useLoaderData()
  return (
    <div>
      <h3 className='bg-gray-500 text-white  px-3 py-3 w-full text-center'>{`Followers : ${data["followers"]}`} 
      
      </h3>
      <div className='w-full flex items-center justify-center px-3 py-4 bg-gray-700'> 

            <img className='' width={"300px"} height={"300px"} src={data["avatar_url"]} alt="" />
    </div>
    </div>

  )
}

export default Github


export const githubInfoLoader=async()=> {
   const response=await fetch(`https://api.github.com/users/aayusharora`);
    return response.json();
}

