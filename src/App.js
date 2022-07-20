import React from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Products />
      </main>
    </div>
  );
}
