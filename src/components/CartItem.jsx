import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector(s => s.cart.items);

  const calculateTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🌿</h2>
        <button className="primary-btn" onClick={() => setPage('products')}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>
      <div className="cart-list">
        {items.map(item => (
          <div key={item.id} className="cart-card">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Unit Price: <strong>${item.price.toFixed(2)}</strong></p>
              <p>Item Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
              <div className="qty-controls">
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
              </div>
            </div>
            <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>
              🗑 Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: <span>${calculateTotal().toFixed(2)}</span></h2>
        <div className="cart-actions">
          <button className="secondary-btn" onClick={() => setPage('products')}>
            ← Continue Shopping
          </button>
          <button className="primary-btn" onClick={() => alert('Coming Soon')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
