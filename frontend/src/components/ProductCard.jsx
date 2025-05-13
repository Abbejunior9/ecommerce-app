// client/src/components/ProductCard.jsx
export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.description.substring(0, 60)}...</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="font-bold text-lg">{product.price.toFixed(2)} €</span>
            <button className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700">
              Ajouter
            </button>
          </div>
        </div>
      </div>
    );
  }
  