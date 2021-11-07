import React, { useState, useMemo, useRef } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price, // đổi sang số
        // hoặc Number(price)
        // hoặc parseInt(price)
      },
    ]);

    setName("");
    setPrice("");
    nameRef.current.focus()
  };

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log("Tính toán lại");
      return result + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <React.Fragment>
      <input
        value={name}
        ref={nameRef}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
