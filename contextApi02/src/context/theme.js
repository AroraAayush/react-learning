import React, { useContext } from "react";
import { createContext } from "react";


export  const ThemeContext=createContext({themeContext:"light",darkTheme:()=>{},lightTheme:()=>{}})

export const ThemeContextProvider=ThemeContext.Provider



//Making this hook so that we do not have to import two things (useContext , ThemeContext)
export default function useTheme(){
    return useContext(ThemeContext);
}
