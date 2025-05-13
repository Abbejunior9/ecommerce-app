import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
