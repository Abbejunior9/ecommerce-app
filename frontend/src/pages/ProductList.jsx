import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/products`;
  
    console.log("API URL utilisée :", apiUrl);
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          // Si la réponse n'est pas valide, on lance une erreur
          throw new Error('Erreur lors de la récupération des produits');
        }
        return response.json(); // On parse la réponse JSON
      })
      .then((data) => {
        console.log("Produits récupérés :", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Erreur API:', error);
        // Tu peux aussi afficher un message d'erreur dans l'UI
        setProducts([]); // On peut par exemple vider les produits en cas d'erreur
      });
  }, []);
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Liste des produits</h1>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">Aucun produit disponible.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <Link to={`/product/${product._id}`} className="block">
                  <img
                    src={product.image || '/images/default.jpg'} // Image par défaut si absente
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                    <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price?.toFixed(2)} €
                      </span>
                      <span className="text-sm text-gray-500">{product.stock} en stock</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
