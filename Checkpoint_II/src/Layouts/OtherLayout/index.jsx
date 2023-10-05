import { useContext } from 'react'
import { OdontoContext } from '../../contexts/OdontoContext'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'

export function OtherLayout() {
  const { darkMode } = useContext(OdontoContext)

  return (
    <>
      <div className={`app ${darkMode ? `light` : `dark`}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer value={false} />
      </div>
    </>
  )
}
