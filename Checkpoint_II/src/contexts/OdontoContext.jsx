import { createContext, useState } from "react"

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

  return (
    <OdontoContext.Provider value={{changeTheme, darkMode}}>
      {children}
    </OdontoContext.Provider>
  )
}

export default OdontoContextProvider;