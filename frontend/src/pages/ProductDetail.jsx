import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // Simuler une base de données locale
  

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Produit non trouvé');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur de chargement :', error);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);
  

  const handleAddToCart = () => {
    alert(`Ajout de ${quantity} ${product.name} au panier.`);
    // Logique d'ajout au panier ici
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <div className="text-center py-12">Chargement du produit...</div>
          ) : !product ? (
            <div className="text-center text-red-600 text-xl py-12">
              Produit introuvable
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    En stock ({product.stock} disponibles)
                  </div>
                  <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
                  <p className="mt-4 text-2xl font-bold text-gray-900">
                    {product.price.toFixed(2)} €
                  </p>

                  <div className="mt-6">
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-700">Quantité</label>
                    <div className="mt-1 flex rounded-md">
                      <button
                        className="px-3 py-1 border border-gray-300 bg-gray-100 text-gray-600 rounded-l-md hover:bg-gray-200"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="w-16 text-center border-y border-gray-300"
                      />
                      <button
                        className="px-3 py-1 border border-gray-300 bg-gray-100 text-gray-600 rounded-r-md hover:bg-gray-200"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={handleAddToCart}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
