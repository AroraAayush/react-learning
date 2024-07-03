import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { ThemeContext, ThemeContextProvider } from './context/theme'

function App() {
//  const [{themeMode,lightTheme,darkTheme}]=useTheme()
const [themeMode,setThemeMode]=useState("light");

const darkTheme=()=>{
  console.log("Dark theme called");
  setThemeMode("dark")
}
const lightTheme=()=>{
  setThemeMode("light")
}


useEffect(()=>{
  console.log("Use effect also called");
  const htmll=document.querySelector('html');
  htmll.classList.remove("light","dark");
  htmll.classList.add(themeMode);
  
},[themeMode])
 return (
  <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}} >
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
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
