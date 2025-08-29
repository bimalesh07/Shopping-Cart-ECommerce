import React from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";


const Navbar = ({setdata,cart}) => {
console.log(useLocation());
const locaton = useLocation();
const navigate = useNavigate();
const [Searchitem, setSearchitem] = useState("")

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
  setSearchitem("")
}
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            B-E Cart
          </Link>

          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Products"
              value={Searchitem}
              onChange={(e) => setSearchitem(e.target.value)}
            ></input>
          </form>

          <Link to="/card" className="cart">
            {" "}
            <button type="button" className="btn btn-primary position-relative">
              <FaCartPlus/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden"></span>
              </span>
            </button>
          </Link>
        </div>
        {locaton.pathname === "/" && (
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
        )}
      </header>
    </>
  );
}

export default Navbar
