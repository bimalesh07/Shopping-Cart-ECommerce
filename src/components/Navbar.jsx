import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
        <Link to={'/'} className='brand'>E-cart</Link>
        <div className='search-bar'>
            <input type='text' placeholder='Search Products'></input>

        </div>
        <Link  to='/card' className='cart'> Cart</Link>
    </div>

    <div className="navbar-wrapper">
        <div className="items">Filter by-{">"}</div>
        <div className="items">No Fillter</div>
        <div className="items">Mobiles</div>
        <div className="items">Laptop</div>
        <div className="items">Tablets</div>
        <div className="items">{">="}2999</div>
        <div className="items">{">="}3999</div>
        <div className="items">{">="}4999</div>
        <div className="items">{">="}5999</div>
    </div>
    
    
    </>

  )
}

export default Navbar
