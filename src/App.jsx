import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function AppContent() {
  const [showProductList, setShowProductList] = useState(false);
  const [page, setPage] = useState('home');

  const navigate = (target) => {
    if (target === 'products') setShowProductList(true);
    setPage(target);
  };

  return (
    <>
      <Navbar page={page} setPage={navigate} />
      {page === 'home' && (
        <div className="landing background-image">
          <div className="landing-overlay">
            <h1>Paradise Nursery 🌿</h1>
            <p>Discover the beauty of nature — one plant at a time.</p>
            <div className="landing-btns">
              <button className="primary-btn" onClick={() => { setShowProductList(true); setPage('products'); }}>
                Get Started
              </button>
              <button className="secondary-btn" onClick={() => setPage('about')}>
                About Us
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 'about' && <AboutUs setPage={navigate} />}
      {(page === 'products' || showProductList) && page === 'products' && <ProductList setPage={navigate} />}
      {page === 'cart' && <CartItem setPage={navigate} />}
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
