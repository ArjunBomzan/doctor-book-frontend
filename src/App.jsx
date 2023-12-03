
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useEffect, useState } from "react";
import axios from "axios";
import Doctors from "./pages/Doctors";
import Index from "./components";
import Details from "./pages/Details";
import Appointment from "./pages/Appointment";
import Book from "./pages/Book";

function App() {


  return (
    <Index>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment/">
          <Route path=":id" element={<Appointment />} />
        </Route>
        {/* <Route path=":id" element={<Details />} /> */}
        <Route path="/book" element={<Book/>}/>
      </Routes>

    </Index>

  )
}

export default App
