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
      <section className='bg-[#0f0a05] w-full h-auto p-[100px]'>
        {
          filterProduct.map((item) => (
            <div key={item.id} className=''>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className='rounded-md'
              />
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[30px]'>{item.title}</h3>
                <p className='text-white text-[20px]'>{item.overview}</p>
                <p className='text-white'>{item.release_date}</p>
                <button onClick={() => handleAddtoCart(item)} className='bg-white text-[18px] font-bold rounded-md py-2 px-2 mt-5 transition duration-500 hover:bg-yellow-500 hover:text-white'>Add To My List</button>
              </div>
            </div>
          ))
        }

      </section>
    </>
  )
}

export default ProductDetails
