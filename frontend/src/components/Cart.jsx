const Cart = ({ cart, isOpen, setIsOpen, removeFromCart, updateQuantity, calculateTotal }) => (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Panier</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
      </div>
  
      <div className="p-4 overflow-y-auto max-h-96">
        {cart.length === 0 ? (
          <p className="text-gray-500">Votre panier est vide</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="mb-4 pb-4 border-b">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{item.name}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Retirer</button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 px-2 py-1 rounded-l">-</button>
                  <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 px-2 py-1 rounded-r">+</button>
                </div>
                <span>{item.price * item.quantity} €</span>
              </div>
            </div>
          ))
        )}
      </div>
  
      {cart.length > 0 && (
        <div className="p-4 border-t mt-auto">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">{calculateTotal()} €</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Commander
          </button>
        </div>
      )}
    </div>
  );
  
  export default Cart;
  