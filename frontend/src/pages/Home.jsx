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
    const dummyProducts = [
      {
        id: 1,
        name: 'Montre Élégante',
        description: 'Une montre élégante pour toutes occasions avec bracelet en cuir véritable.',
        price: 129.99,
        image: '/images/montres.jpg'
      },
      {
        id: 2,
        name: 'Sac à Main Designer',
        description: 'Sac à main tendance avec compartiments multiples et finition premium.',
        price: 89.99,
        image: '/images/sac.jpg'
      },
      {
        id: 3,
        name: 'Baskets Sportives',
        description: 'Baskets confortables pour le sport et le quotidien avec semelle amortissante.',
        price: 64.99,
        image: '/images/basket.jpg'
      },
      {
        id: 4,
        name: 'Lunettes de Soleil',
        description: 'Protection UV complète avec design moderne et élégant.',
        price: 49.99,
        image: '/images/lunette.jpg'
      }
    ];

    setProducts(dummyProducts);
    setLoading(false);
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
