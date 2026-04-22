# 🌿 Paradise Nursery

An online plant shopping cart built with **React** and **Redux Toolkit** as part of a Coursera front-end development project.

## 📖 Description

Paradise Nursery is a fully functional e-commerce web application where users can browse plants across multiple categories, add them to a shopping cart, and manage their selections before checkout.

## ✨ Features

- **Landing Page** — Full-page background with "Get Started" navigation
- **About Us Page** — Company description, purpose, and team guidelines
- **Product Catalog** — 18 unique plants across 3 categories (Indoor, Outdoor, Garden)
- **Add to Cart** — Adds plants to Redux store; button disables after adding
- **Dynamic Cart Badge** — Navbar shows live item count
- **Cart Management** — Increase/decrease quantity, remove items, view per-item totals
- **Order Total** — Real-time total price calculation
- **Checkout Alert** — "Coming Soon" notification
- **Continue Shopping** — Navigate back to product list from cart
- **Responsive Design** — Mobile-friendly layout
- **Smooth Animations** — Fade-up transitions on page load and card hover effects

## 🛠️ Tech Stack

- React 18 (functional components + hooks)
- Redux Toolkit
- React-Redux
- Vite
- CSS (Grid, Flexbox, animations)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   └── CartItem.jsx
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
├── App.jsx
└── App.css
```
