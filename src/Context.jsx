import React, { createContext, useState } from "react";
import App from "./App.jsx";
import Header from "./Header.jsx";

export const cartContext = createContext();

function Context() {
  const [hello, setHello] = useState("Hello");
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <cartContext.Provider
        value={{
          hello,
          setCartCount,
          cartCount,
        }}
      >
        <Header />
        <App />
      </cartContext.Provider>
    </>
  );
}

export default Context;
