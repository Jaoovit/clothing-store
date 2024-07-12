{/* Page imports */}
import HomePage from "./pages/Homepage"
import ShoppingCart from "./pages/ShoppingCart"
import Product from "./pages/Product"

{/* Config react router dom */}
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
