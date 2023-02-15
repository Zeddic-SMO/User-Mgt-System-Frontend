import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import AddEdit from "./Pages/AddEdit"
import View from "./Pages/View"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
