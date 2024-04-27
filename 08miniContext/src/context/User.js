import {createContext, useContext} from "react"

// Step1: Create the Context
export const UserContext = createContext()

// Step2: Provider
export const UserProvider = UserContext.Provider;

// Step3: Consumer hook
export default function useUser(){
    return useContext(UserContext)
}