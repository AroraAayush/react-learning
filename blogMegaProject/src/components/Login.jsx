import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { authService } from '../appwrite/auth'
import {login as storeLogin} from '../appwrite/auth'
import 
function Login() {
    const naviate=useNavigate();
    const dispatch=useDispatch();
    const {register,handleSubmit}=useForm();
    const [error,setError]=useState("")
    const login=async(data)=> {
        setError("");
        try{
            const session=await authService.login(data);
            if(session)
            {
                const userData=await authService.getCurrentUser();
                if(userData)
                {
                    dispatch(storeLogin(userData))
                    naviate('/');
                }
                
            } 
        }
        catch(error)
        {
            setError(error.message);
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border-black/10'>
      <div className='mb-2 flex justify-center'>
      <span className='inline-block w-full max-w-[100px]'>
     <LogoutButton/>
      </span></div>
      <h2 className=''>Sign in to your Account</h2>
     <p>Dont have an Account 
      <Link to='/signup'>Sign up</Link>
      </p>
     {error && <p className='text-red'>{error}</p>}
     <form onSubmit={
        handleSubmit(login)
     } className='mt-8'>
     <div className='space-y-5'>
     <Input
      label="Email : "
      className=""
      type="email"
    {...register("email",{
        required:true,
        validate:{
            matchPattern:(value)=>/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value) || "Email must be valid"
        }
    })}
     />
     <Input label="Password" type="password" placeholder="Enter your password "
     {...register("password",{
        required:true
     })} />
     <Button classname='w-full' type="submit" >Sign in</Button>
     </div>
     </form>
      </div>
    </div>
  )
}

export default Login
