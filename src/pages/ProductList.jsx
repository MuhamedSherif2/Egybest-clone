import React, { useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

function ProductList() {
  const { products, setSelectProduct } = useContext(Context);
  const handleClick = (product) => {
    setSelectProduct(product)
  }

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <h1>Product List</h1>
      <div className="product-grid">
        {
          products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} onClick={() => handleClick(product)} >
              <div className="product-card">
                <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.release_date}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  );
}

export default ProductList;