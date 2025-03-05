import React, { useContext } from 'react';
import { Context } from '../Context';

function List() {
  const { cart } = useContext(Context);
  if (!Array.isArray(cart)) {
    return <p>Your cart data is invalid.</p>;
  } else {
    return (
      <section>
        <h1 className='pt-[100px]'>My-list</h1>
        {cart.length === 0 ? (
          <p>Your List is Empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <p>{item.release_date}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

}

export default List;