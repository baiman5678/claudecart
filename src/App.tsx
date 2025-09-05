import React, { useState } from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

function App() {
  const [currentView, setCurrentView] = useState<'products' | 'cart'>('products');

  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <h1>購物網站</h1>
          <nav className="navigation">
            <button 
              className={`nav-btn ${currentView === 'products' ? 'active' : ''}`}
              onClick={() => setCurrentView('products')}
            >
              商品列表
            </button>
            <button 
              className={`nav-btn ${currentView === 'cart' ? 'active' : ''}`}
              onClick={() => setCurrentView('cart')}
            >
              購物車
            </button>
          </nav>
        </header>
        
        <main className="App-main">
          {currentView === 'products' ? <ProductList /> : <ShoppingCart />}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
