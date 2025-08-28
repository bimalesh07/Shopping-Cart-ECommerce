import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
const ProductDe = () => {
const {id}=  useParams();

const [Productitem, setProductitem] = useState({})
const [Relatedproduct, setRelatedproduct] = useState([])

useEffect(() => {
  const filterproduct = items.filter((product) => product.id == id);
  // console.log(filterproduct)
  setProductitem(filterproduct[0]);

  const relatedFilter = items.filter(
    (P) => P.category === Productitem.category
  );
  setRelatedproduct(relatedFilter);
  // console.log(relatedFilter)
}, [id, Productitem.category]);



  return (
    <>
      <div>
        <div className="container con">
          <div className="img">
            <img src={Productitem.imgSrc}></img>
          </div>
          <div className="text-center">
            <h5 className="card-title">{Productitem.title}</h5>
            <p className="card-text">{Productitem.description}</p>
            <button className="btn btn-primary mx-3">{Productitem.price} </button>
            <button className="btn btn-primary mx-3">Add To Cart</button>
          </div>
        </div>
        <h1 style={{alignItems:'center', display:'flex', justifyContent:'center'}}>Related Product</h1>
        <Product items={Relatedproduct}/>
      </div>
    </>
  );
}

export default ProductDe
