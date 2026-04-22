import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function AppContent() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === 'home' && (
        <div className="landing">
          <div className="landing-overlay">
            <h1>Paradise Nursery 🌿</h1>
            <p>Discover the beauty of nature — one plant at a time.</p>
            <div className="landing-btns">
              <button className="primary-btn" onClick={() => setPage('products')}>
                Get Started
              </button>
              <button className="secondary-btn" onClick={() => setPage('about')}>
                About Us
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 'about' && <AboutUs setPage={setPage} />}
      {page === 'products' && <ProductList setPage={setPage} />}
      {page === 'cart' && <CartItem setPage={setPage} />}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
