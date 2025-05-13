// client/src/components/Navbar.jsx
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';




export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">SHAMBER SHOP</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Accueil</a>
              <a href="/product-list" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Produits</a>
              <a href="/cart" className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
    {cartItems.length}
  </span>
)}

              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Accueil</a>
            <a href="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Produits</a>
            <a href="/cart" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Panier</a>
          </div>
        </div>
      )}
    </nav>
  );
}
