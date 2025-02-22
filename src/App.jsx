import React from 'react'
import './index.css'
import { ContextProvider } from './Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </ContextProvider>
    </BrowserRouter>
  )
}

export default App
