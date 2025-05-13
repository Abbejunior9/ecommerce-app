export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">SHAMBER SHOP</h2>
              <p className="text-gray-400 mt-2">Votre boutique d'articles de qualité</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Liens rapides</h3>
              <ul className="space-y-1">
                <li><a href="/" className="text-gray-400 hover:text-white">Accueil</a></li>
                <li><a href="/product-list" className="text-gray-400 hover:text-white">Produits</a></li>
           
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} SHAMBERSHOP. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    );
  }