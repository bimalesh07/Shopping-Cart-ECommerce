import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { items } from './Data';
const ProductDe = () => {
const {id}=  useParams();

const [Product, setProduct] = useState({})

useEffect(() => {
    const filterproduct = items.filter((product)=>product.id == id)
    console.log(filterproduct)
    setProduct(filterproduct[0])

}, [id])

  return (
    <div>
        <div className='container'>
            <div className='img'>
                <img src={Product.imgSrc}></img>

            </div>

        </div>

    </div>
  )
}

export default ProductDe
