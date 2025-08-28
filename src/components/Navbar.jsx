import React from 'react'
import { data, Link } from 'react-router-dom'
import { items } from './Data'

const Navbar = ({setdata}) => {
  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    setdata(element)
    // console.log(element)
  }
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Search Products"></input>
          </div>
          <Link to="/card" className="cart">
            {" "}
            Cart
          </Link>
        </div>
        <div className="navbar-wrapper">
          <div className="items">Filter by-{">"}</div>
          <div className="items" onClick={()=> setdata(items)}>No Fillter</div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptop
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items">{">="}2999</div>
          <div className="items">{">="}3999</div>
          <div className="items">{">="}4999</div>
          <div className="items">{">="}5999</div>
        </div>
      </header>
    </>
  );
}

export default Navbar
