import React from 'react';
import { useCart } from '../context/CartContext';
import './ShoppingCart.css';

const ShoppingCart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart">
        <div className="cart-header">
          <h2>購物車</h2>
        </div>
        <div className="empty-cart">
          <p>您的購物車是空的</p>
          <p>去添加一些商品吧！</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <h2>購物車 ({getTotalItems()} 件商品)</h2>
        <button className="clear-cart-btn" onClick={clearCart}>
          清空購物車
        </button>
      </div>
      
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="item-image">
              {item.product.image ? (
                <img src={item.product.image} alt={item.product.name} />
              ) : (
                <div className="placeholder-image">無圖片</div>
              )}
            </div>
            
            <div className="item-details">
              <h3>{item.product.name}</h3>
              {item.product.description && (
                <p className="item-description">{item.product.description}</p>
              )}
              <p className="item-price">{formatPrice(item.product.price)}</p>
            </div>
            
            <div className="item-controls">
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                  className="quantity-input"
                />
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                {formatPrice(item.product.price * item.quantity)}
              </div>
              
              <button 
                className="remove-btn"
                onClick={() => removeItem(item.product.id)}
                title="移除商品"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="summary-row">
          <span>商品總數：</span>
          <span>{getTotalItems()} 件</span>
        </div>
        <div className="summary-row total">
          <span>總金額：</span>
          <span>{formatPrice(getTotalPrice())}</span>
        </div>
        
        <div className="cart-actions">
          <button className="checkout-btn">
            結帳
          </button>
          <button className="continue-shopping-btn">
            繼續購物
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;