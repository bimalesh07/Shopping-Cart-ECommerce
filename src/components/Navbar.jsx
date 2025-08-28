import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'

const Navbar = ({setdata}) => {
const navigate = useNavigate();
const [Searchitem, setSearchitem] = useState(" ")
  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    setdata(element)
    // console.log(element)
  }
    const filterbyprice = (price) => {
      const element = items.filter((itemprice) => itemprice.price >= price);
      setdata(element);
      console.log(element)
    };
const handleSubmit = (e)=>{
  e.preventDefault();
  navigate(`/search/${Searchitem}`);
}
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>

          <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Products" value={Searchitem} onChange={(e)=>setSearchitem(e.target.value)} ></input>
            <h1>{Searchitem}</h1>
          </form>

          <Link to="/card" className="cart">
            {" "}
            Cart
          </Link>
        </div>
        <div className="navbar-wrapper">
          <div className="items">Filter by-{">"}</div>
          <div className="items" onClick={() => setdata(items)}>
            No Fillter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptop
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterbyprice("2999")}>
            {">="}2999
          </div>

          <div className="items" onClick={() => filterbyprice("3999")}>
            {">="}3999
          </div>
          <div className="items" onClick={() => filterbyprice("4999")}>
            {">="}4999
          </div>
          <div className="items" onClick={() => filterbyprice("5999")}>
            {">="}5999
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar
