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
  return (
    <>
      <Router>
        <Navbar setdata={setdata}/>
        <Routes>
          <Route path='/'element={<Product items={data}/>}></Route>
          <Route path='/product/:id' element={<ProductDe/>}></Route>
          <Route path='/search/:term' element={<Search/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
