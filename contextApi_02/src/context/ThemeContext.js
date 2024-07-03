import React  from "react"
import {useContext} from 'react'

export const ThemeContext=React.createContext({themeMode:"light", toggleTheme:()=>{}})
  


export const ThemeContextProvider=ThemeContext.Provider


export default  function  useTheme(){
return useContext(ThemeContext);
}