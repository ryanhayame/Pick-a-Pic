import './App.css'
import React from "react"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
  return (
    <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={ <Photos /> } />
                <Route path="/cart" element={<Cart />} />        
            </Routes>
    </div>
  )
}

export default App;
