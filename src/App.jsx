import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Context from "./Context.jsx";
import Data from "./Data.js";

import { cartContext } from "./Context";

function App() {
  const [products, setProducts] = useState(Data);

  const { hello, setCartCount } = useContext(cartContext);

  useEffect(() => {
    let temp = 0;
    products.forEach((product) => {
      temp += product.amount;
    });
    setCartCount(temp);
 
  }, [products]);


  console.log(products);

  function handleRemove(productToRemove) {
    let removedItems = products.filter((product) => {
      return product != productToRemove;
    });
    setProducts(removedItems);
  }

 

  function handleIncrement(toIncrement) {
    // console.log(toDecrement)
    let obj = products.find((product) => {
      return product == toIncrement;
    });

    obj.amount += 1;

    let temp = 0;
    products.forEach((product) => {
      temp += product.amount;
    });
    setCartCount(temp);
  }

  function handleDecrement(toDecrement) {
    if (toDecrement.amount != 1) {
      let obj = products.find((obj) => {
        return obj == toDecrement;
      });
      console.log(obj.amount);
      obj.amount -= 1;

      let temp = 0;
      products.forEach((product) => {
        temp += product.amount;
      });
      setCartCount(temp);
    }
  }

  //Clear Complete Cart :)
  function clearCart() {
    setProducts([]);
  }


   
  let t=0;
  products.map((x)=>{
    t+=x.amount*x.price;
      })



  return (
    <>
      <div className="main">
        <h1> YOUR BAG</h1>
        <br></br>
        <br></br>

        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.img} alt="" />

              <div className="product-details">
                <p>{product.title}</p>
                <p>${product.price}</p>
                <span
                  onClick={() => {
                    handleRemove(product);
                  }}
                >
                  remove
                </span>
              </div>

              <div className="amount-btns">
                <span
                  onClick={() => {
                    handleDecrement(product);
                  }}
                >
                  &lt;
                </span>
                <h4>{product.amount}</h4>
                <span
                  onClick={() => {
                    handleIncrement(product);
                  }}
                >
                  &gt;
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <div className="total-div">
          <span>Total</span>
          <p>
          {t}
          </p>
        </div>
        <button onClick={clearCart}>Clear Cart</button>
      </footer>
    </>
  );
}

export default App;
