import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const PLANTS = {
  Indoor: [
    { id: 'i1', name: 'Peace Lily', price: 12.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&q=80' },
    { id: 'i2', name: 'Snake Plant', price: 14.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&q=80' },
    { id: 'i3', name: 'Pothos', price: 8.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80' },
    { id: 'i4', name: 'Spider Plant', price: 9.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=300&q=80' },
    { id: 'i5', name: 'ZZ Plant', price: 18.99, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&q=80' },
    { id: 'i6', name: 'Monstera', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80' },
  ],
  Outdoor: [
    { id: 'o1', name: 'Lavender', price: 10.99, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=300&q=80' },
    { id: 'o2', name: 'Rosemary', price: 7.99, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=300&q=80' },
    { id: 'o3', name: 'Hydrangea', price: 19.99, image: 'https://images.unsplash.com/photo-1587530378-b5c3e8e5e3e5?w=300&q=80' },
    { id: 'o4', name: 'Bougainvillea', price: 22.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80' },
    { id: 'o5', name: 'Jasmine', price: 13.99, image: 'https://images.unsplash.com/photo-1587530378-b5c3e8e5e3e5?w=300&q=80' },
    { id: 'o6', name: 'Hibiscus', price: 16.99, image: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=300&q=80' },
  ],
  Garden: [
    { id: 'g1', name: 'Sunflower', price: 5.99, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&q=80' },
    { id: 'g2', name: 'Marigold', price: 4.99, image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=300&q=80' },
    { id: 'g3', name: 'Tulip', price: 6.99, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=300&q=80' },
    { id: 'g4', name: 'Rose Bush', price: 15.99, image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=300&q=80' },
    { id: 'g5', name: 'Daisy', price: 4.49, image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc5e?w=300&q=80' },
    { id: 'g6', name: 'Peony', price: 17.99, image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc5e?w=300&q=80' },
  ],
};

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(s => s.cart.items.some(i => i.id === plant.id));

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="price">${plant.price.toFixed(2)}</p>
        <button
          className={`add-btn ${inCart ? 'disabled' : ''}`}
          onClick={() => dispatch(addItem(plant))}
          disabled={inCart}
        >
          {inCart ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductList({ setPage }) {
  const [activeTab, setActiveTab] = useState('Indoor');

  return (
    <div className="product-container">
      <h1>Our Plants 🌱</h1>
      <div className="tabs">
        {Object.keys(PLANTS).map(cat => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="plant-grid">
        {PLANTS[activeTab].map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      <button className="secondary-btn" onClick={() => setPage('cart')}>
        View Cart 🛒
      </button>
    </div>
  );
}

export default ProductList;
