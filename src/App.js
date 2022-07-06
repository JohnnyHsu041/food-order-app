import React, { useState } from "react";

import CartProvider from "./store/CartPtovider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsClicked, setCartIsClicked] = useState(false);

  const closeCartHandler = () => {
    setCartIsClicked(false);
  };

  const openCartHandler = () => {
    setCartIsClicked(true);
  };

  return (
    <CartProvider>
      {cartIsClicked && <Cart onClick={closeCartHandler} />}
      <Header onClick={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
