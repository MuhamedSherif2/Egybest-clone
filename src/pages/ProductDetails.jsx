import React, { useContext } from 'react'
import { Context } from '../Context';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { AddtoCart, products } = useContext(Context);
  const handleAddtoCart = (selectProduct) => {
    AddtoCart(selectProduct)
  }
  const { id } = useParams()
  const filterProduct = products.filter((product) => product.id == id)

  return (
    <>
    {
      filterProduct.map((item) => (
        <div key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          <h3>{item.title}</h3>
          <p>{item.release_date}</p>
          <button onClick={() => handleAddtoCart(item)} className='bg-black text-white'>My List</button>
        </div>
      ))
    }
    </>
  )
}

export default ProductDetails
