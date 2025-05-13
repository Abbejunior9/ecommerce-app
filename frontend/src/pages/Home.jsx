// client/src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 4)); // ← Tu peux garder 4 produits pour "populaires"
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des produits :', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Bienvenue sur SimpleBoutique</h1>
              <p className="text-xl mb-6">Découvrez nos produits de qualité à prix compétitifs</p>
              <Link to="/product-list">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-100">
                  Voir les produits
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Produits Populaires</h2>
          
          {loading ? (
            <div className="text-center py-12">Chargement des produits...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link to="/product-list">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-700">
                Voir tous les produits
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
