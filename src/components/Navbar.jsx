import { useSelector } from 'react-redux';

function Navbar({ page, setPage }) {
  const count = useSelector(s => s.cart.items.reduce((acc, i) => acc + i.quantity, 0));

  return (
    <nav className="navbar">
      <span className="nav-brand" onClick={() => setPage('home')}>🌿 Paradise Nursery</span>
      <div className="nav-links">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('products')}>Plants</button>
        <button className="cart-btn" onClick={() => setPage('cart')}>
          🛒 Cart {count > 0 && <span className="cart-badge">{count}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
