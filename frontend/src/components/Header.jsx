const Header = ({ openCart, cartCount }) => (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MonBoutique</h1>
        <button onClick={openCart} className="flex items-center space-x-2">
          <span>Panier</span>
          <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
  
  export default Header;
  