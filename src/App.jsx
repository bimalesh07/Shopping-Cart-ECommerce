import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDe from './components/ProductDe'
import Search from './components/Search'
import Card from './components/Card'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Product/>}></Route>
          <Route path='/product/:id' element={<ProductDe/>}></Route>
          <Route path='/search/:term' element={<Search/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
