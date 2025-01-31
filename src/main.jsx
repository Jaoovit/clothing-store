import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

{/* Page imports */}
import HomePage from "./pages/Homepage"
import ShoppingCart from "./pages/ShoppingCart"
import Product from "./pages/Product"

{/* Config react router dom */}
import { BrowserRouter, Routes, Route } from "react-router-dom"

{/* component import fild */}

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="shoppingCart" element={<ShoppingCart />}></Route>
            <Route path="product/:id" element={<Product />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
