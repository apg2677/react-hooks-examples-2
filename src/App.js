import "./App.css";
import { useEffect, useState, useContext, createContext } from "react";

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <ProductList />
      <ShoppingCart />
    </CartContext.Provider>
  );
}

function ProductList() {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => addToCart("Product 1")}>Add Product 1</button>
      <button onClick={() => addToCart("Product 2")}>Add Product 2</button>
      <button onClick={() => addToCart("Product 3")}>Add Product 3</button>
    </div>
  );
}

function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeFromCart(item)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
