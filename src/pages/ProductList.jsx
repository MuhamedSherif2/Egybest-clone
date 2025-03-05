import React, { useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

function ProductList() {
  const { products, setSelectProduct } = useContext(Context);
  const handleClick = (product) => {
    setSelectProduct(product)
  }
  console.log(products)

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 mdl:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} onClick={() => handleClick(product)}
              className='flex felx-col justify-center'
            >
              <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title} 
              className='w-[350px] rounded' 
              />
            </Link>
          ))
        }
      </div>
    </section>
  );
}

export default ProductList;