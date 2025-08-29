import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast,Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Product = ({items, cart, setcart}) => {
 const addtocart =(id, price,title,description,imgSrc)=>{
  const obj = {
    id,price,title,description,imgSrc
     
  }
  setcart([...cart, obj])
  console.log(cart)
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
      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div key={product.id} className="col-lg-4  my-3 text-center">
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={product.imgSrc} className="card-img-top"></img>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3 ">
                    {product.price}{" "}
                  </button>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() =>
                      addtocart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product
