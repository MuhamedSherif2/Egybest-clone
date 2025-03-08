import React from 'react'
import { ContextProvider } from './Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import List from './pages/List'
import Login from './pages/Login'
import Home from './pages/Home'
import SingUp from './pages/Register'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </ContextProvider>
    </BrowserRouter>
  )
}

export default App
