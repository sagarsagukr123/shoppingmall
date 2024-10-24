import React, { useState, useEffect } from 'react';
import ProductService from '../Service/ProductService';

function Home() {
  const [products, setPro] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((res) => {
        setPro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      {products.map((post) => (
        <div className="card" key={post.id}>
          {/* Use the URL directly without require() */}
          <img src={post.url} alt={post.description} />
          <h3>{post.name}</h3>
          <h4>Rs: {post.price}</h4>
        </div>
      ))}
    </main>
  );
}

export default Home;
