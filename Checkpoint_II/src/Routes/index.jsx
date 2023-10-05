import { BrowserRouter, Route, Routes } from "react-router-dom";
import OdontoContextProvider from '../contexts/OdontoContext'
import Home from "../pages/Home/Home";
import Contact from "../pages/Login/Login";
import Detail from "../pages/Detail/Detail";
import { DefaultLayout } from "../Layouts/DefaultLayout";
import { OtherLayout } from "../Layouts/OtherLayout";

export function RouteList() {
  return (
    <>
        <BrowserRouter>
          <OdontoContextProvider>
            <Routes>

            <Route path="/" element={<DefaultLayout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/dentist/:id" element={<Detail />} />
            </Route>

            <Route path="/" element={<OtherLayout />}>
              <Route path="/login" element={<Contact />} />

            </Route>
            
            </Routes>
          </OdontoContextProvider>
        </BrowserRouter>
    </>
  )
}