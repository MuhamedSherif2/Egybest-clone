import React from 'react'
import ProductList from './ProductList'

function Home() {
  return (
    <section className='w-full bg-[#0f0a05]'>
      <div className='container mx-auto py-[50px]'>
        <h1 className='text-white text-[40px] mdl:text-[70px] font-bold h-[400px] flex items-center justify-center text-center'>
          Home of WATCH IT Originals and Exclusives premieres.
        </h1>
      </div>
      <ProductList />
    </section>
  )
}

export default Home
