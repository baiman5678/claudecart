import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/cart';
import './ProductList.css';

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    description: '最新款 iPhone，配備 A17 Pro 芯片'
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    price: 1299,
    description: '輕薄筆記本電腦，搭載 M3 芯片'
  },
  {
    id: 3,
    name: 'iPad Pro',
    price: 799,
    description: '專業平板電腦，支持 Apple Pencil'
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 249,
    description: '主動降噪無線耳機'
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 399,
    description: '智能手錶，健康監測功能'
  },
  {
    id: 6,
    name: 'Magic Mouse',
    price: 79,
    description: '無線滑鼠，多點觸控表面'
  }
];

const ProductList: React.FC = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="product-list">
      <h2>商品列表</h2>
      <div className="products-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <div className="placeholder-image">商品圖片</div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{formatPrice(product.price)}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;