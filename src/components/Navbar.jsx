import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
        <div className='brand'>E-cart</div>
        <div className='search-bar'>
            <input type='text' placeholder='Search Products'></input>

        </div>
        <div className='cart'> Cart</div>
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
