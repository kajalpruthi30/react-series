import {createContext, useContext} from "react"

// Step1: Create the context
export const ThemeContext = createContext()

// Step2: Provider
export const ThemeProvider = ThemeContext.Provider

// Step3: Hook
export default function useTheme(){
  return useContext(ThemeContext)
}