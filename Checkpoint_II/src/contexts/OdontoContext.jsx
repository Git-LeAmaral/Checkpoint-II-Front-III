import { createContext, useState, useReducer } from "react";
import {loginReducer} from "../reducers/loginReducers";

export const OdontoContext = createContext()

// eslint-disable-next-line no-unused-vars
const OdontoContextProvider = ({children}) => {

  const data = localStorage.getItem("darkmode")
  const [darkMode, setDarkMode] = useState(
    data ? JSON.parse(data) : true
  )

  const changeTheme = () => {
    localStorage.setItem("darkmode", !darkMode)
    setDarkMode(!darkMode)
  }

  const [state, dispatch] = useReducer(loginReducer, {login: !localStorage.getItem("token")})

  const login = () => {
    dispatch({type: 'SET_LOGIN'})
  }

  const logout = () => {
    dispatch({type: 'SET_LOGOUT'})
    localStorage.removeItem("token");
  }

  return (
    <OdontoContext.Provider value={{changeTheme, state, login, logout, darkMode}}>
      {children}
    </OdontoContext.Provider>
  )
}

export default OdontoContextProvider;