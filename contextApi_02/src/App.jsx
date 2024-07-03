
import './App.css'
import ThemeBtn from './components/ThemeButton';
import Card from './components/Card';
import { ThemeContextProvider } from './context/ThemeContext'
import {useState,useEffect} from 'react'
function App() {
  const [themeMode,setThemeMode]=useState("light");
  const toggleTheme=()=>{
    if(themeMode=='light')
      setThemeMode('dark');
    else
    setThemeMode('light');
  }

  useEffect(() => {
    const htmll=document.querySelector('html');
    htmll.classList.remove("light","dark");
    htmll.classList.add(themeMode)},
    [themeMode])
  
  return (
  <ThemeContextProvider value={{themeMode,toggleTheme}}>

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

  </ThemeContextProvider>
  
  )
}

export default App
