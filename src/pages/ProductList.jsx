import React, { useContext } from 'react'
import { Context } from '../Context';
import { Link } from 'react-router-dom';

function ProductList() {
  const { products, setSelectProduct } = useContext(Context)
  const handleClick = (item) => {
    setSelectProduct(item)
  }

  return (
    <section>
      <h1>Product List</h1>
      {
        products.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <Link to={`/products/${item.id}`} onClick={() => handleClick(item)}>
              More Details
            </Link>
          </div>
        ))
      }
    </section>
  )
}

export default ProductList
