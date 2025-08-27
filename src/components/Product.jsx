import React from 'react'
import { items } from './Data'

const Product = () => {
  return (
    <div className="container">
      <div className="row">
        <>
          {items.map((product) => (
            <div className="col-lg-4 text-center">
              <div className="card">
                <img src={product.imgSrc}></img>
                <div className="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.description}</p>
                  <button className='btn btn-primary mx-3'>{product.price}{" "}</button>
                  <button className='btn btn-primary mx-3'>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default Product
