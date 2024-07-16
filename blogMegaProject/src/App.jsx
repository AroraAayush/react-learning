
import './App.css'
import {useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { authService } from './appwrite/auth';
import authSlice, { logout,login } from './store/authSlice';
import { conf } from './conf/config';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
 
function App() {
  
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch();
  
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userDets)=>{
      if(userDets)
        dispatch(login(userDets))
      else
      dispatch(logout())
    })
    .catch(()=>dispatch(logout()))
    .finally(()=>setLoading(false))
  
  },[])

  const st=useSelector((state)=>state.status);
  console.log(st);
  return loading ? (
    <>
      Wait till loading.....
    </>
  ): (
    <>
    <Header/>
    <Footer/>
    </>
  )
}

export default App
