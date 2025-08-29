import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom';



const Card = ({cart, setcart}) => {
  return (
    <>
      <div className="container  bg- dark" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <>
            <div className="text-center my-3">
              <h1>Your cart is Empity </h1>
              <Link to={"/"} className="btn btn-warning">
                Continue shopping....
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3 my-5" style={{ width: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">
                          {product.price}
                        </button>
                        <button className="btn btn-primary mx-3">
                          Buy Now{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
        {cart.length!= 0 && (
          <div
            className="container, text-center my-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <button className="btn btn-warning">Checkout</button>
            <button className="btn btn-warning " onClick={() => setcart("")}>
              {" "}
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Card
