function AboutUs({ setPage }) {
  return (
    <div className="about-container">
      <h1>About Paradise Nursery 🌿</h1>
      <p className="about-tagline">Bringing nature closer to your home since 2024.</p>

      <div className="about-grid">
        <div className="about-card">
          <h2>🌱 Who We Are</h2>
          <p>
            Paradise Nursery is a passionate team of plant lovers dedicated to making
            greenery accessible to everyone. We curate the finest indoor, outdoor, and
            garden plants sourced from sustainable growers.
          </p>
        </div>

        <div className="about-card">
          <h2>🎯 Our Purpose</h2>
          <p>
            We believe plants improve well-being, purify air, and transform living spaces.
            Our mission is to help every home and garden flourish with healthy, beautiful plants
            at affordable prices.
          </p>
        </div>

        <div className="about-card">
          <h2>👥 Team Guidelines</h2>
          <ul>
            <li>Browse plants by category on the Plants page.</li>
            <li>Click "Add to Cart" to add a plant — button disables after adding.</li>
            <li>Adjust quantities or remove items in the Cart.</li>
            <li>Use "Continue Shopping" to return to the product list.</li>
            <li>Hit "Checkout" when ready to place your order.</li>
          </ul>
        </div>
      </div>

      <button className="primary-btn" onClick={() => setPage('products')}>
        Shop Now 🛍️
      </button>
    </div>
  );
}

export default AboutUs;
