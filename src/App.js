import React from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductItem/ProductDetail';
import { Routes, Route, Navigate } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </main>
    </div>
  );
}
