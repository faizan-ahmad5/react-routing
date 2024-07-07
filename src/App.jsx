import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './pages/Navbar'
import Skills from "./pages/Skills"
import About from "./pages/About"
import Home from "./pages/Home"

import "./index.css"

function App() {

  return (
    <>
      <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/skills" element = {<Skills/>} />
        <Route path="/about" element = {<About/>} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
