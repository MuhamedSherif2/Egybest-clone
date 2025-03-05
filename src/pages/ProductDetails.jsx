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
      <section className='bg-[#0f0a05] w-full h-screen pt-[100px]'>
        {
          filterProduct.map((item) => (
            <div key={item.id} className='container mx-auto'>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className='w-[400px]'
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
                <p>{item.release_date}</p>
                <button onClick={() => handleAddtoCart(item)} className='bg-black text-white'>My List</button>
              </div>
            </div>
          ))
        }

      </section>
    </>
  )
}

export default ProductDetails
