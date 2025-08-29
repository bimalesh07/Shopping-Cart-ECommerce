import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast,Bounce } from "react-toastify";
const ProductDe = ({cart, setcart}) => {
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

// make a function
 const addtocart = (id, price,title,description,imgSrc)=>{
  const obj = {
    id,price,title,description,imgSrc
     
  }
  setcart([...cart, obj])

  // console.log(cart)
  toast.success('Iten is Added in Cart ', {
  position: "top-right",
  autoClose: 1100,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
  });
 }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div>
        <div className="container con">
          <div className="img">
            <img src={Productitem.imgSrc}></img>
          </div>
          <div className="text-center">
            <h5 className="card-title">{Productitem.title}</h5>
            <p className="card-text">{Productitem.description}</p>
            <button className="btn btn-primary mx-3">
              {Productitem.price}{" "}
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={() =>
                addtocart(
                  Product.id,
                  Product.price,
                  Product.title,
                  Product.description,
                  Product.imgSrc
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
        <h1
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Related Product
        </h1>
        <Product items={Relatedproduct} cart={cart} setcart={setcart} />
      </div>
    </>
  );
}

export default ProductDe
