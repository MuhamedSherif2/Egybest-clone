import React, { useContext } from 'react';
import { Context } from '../Context';

function List() {
  const { cart } = useContext(Context);
  if (!Array.isArray(cart)) {
    return <p>Your cart data is invalid.</p>;
  } else {
    return (
      <section className='w-full bg-[#0f0a05] pt-[100px] h-screen'>
        <div className='container mx-auto'>
          {cart.length === 0 ? (
            <p className='text-white font-bold text-[30px]'>Your List is Empty</p>
          ) : (
            <div className='container mx-auto grid grid-cols-1 mdl:grid-cols-2 lg:grid-cols-3 gap-5 pb-10'>
              {cart.map((item) => (
                <div key={item.id} className='flex flex-col'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className='w-[350px] rounded flex justify-center' 
                  />
                  <h3 className='text-white text-xl py-2'>{item.title}</h3>
                  <p className='text-white text-xl'>{item.release_date}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    );
  }

}

export default List;