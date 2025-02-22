import React, { useContext } from 'react'
import { Context } from '../Context';

function ProductDetails() {
    const { selectProduct } = useContext(Context);
  return (
    <div>
      <h1>{selectProduct.title}</h1>
      <img src={selectProduct.image} alt="" />
      <span>{selectProduct.price}</span>
    </div>
  )
}

export default ProductDetails
