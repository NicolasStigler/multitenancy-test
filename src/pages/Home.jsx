import React from 'react';
import './Home.css';
import { useTenant } from '../contexts/TenantContext';

const Home = () => {
  const { tenant } = useTenant();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to {tenant ? tenant.charAt(0).toUpperCase() + tenant.slice(1) : 'Our Supermarket'}</h1>
        <p>Your one-stop shop for all your grocery needs!</p>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {/* Example product items */}
          <div className="product-item">
            <img src="/assets/products/product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$10.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="/assets/products/product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$15.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="/assets/products/product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$20.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <button className="shop-now">Shop Now</button>
      </footer>
    </div>
  );
};

export default Home;