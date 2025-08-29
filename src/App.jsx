import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDe from './components/ProductDe'
import Search from './components/Search'
import Card from './components/Card'
import { items } from './components/Data'
import { useState } from 'react'

function App() {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([])
  return (
    <>
      <Router>
        <Navbar setdata={setdata} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setcart={setcart} items={data} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDe cart={cart} setcart={setcart} />}
          ></Route>
          <Route
            path="/search/:term"
            element={<Search cart={cart} setcart={setcart} />}
          ></Route>
          <Route
            path="/card"
            element={<Card cart={cart} setcart={setcart} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
