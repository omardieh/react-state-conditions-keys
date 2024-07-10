import { Fragment } from "react/jsx-runtime";
import "./App.css";
import data from "./assets/data.json";
import { useState } from "react";

function ProductsList({ products, setProducts }) {
  const handleClick = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };
  return (
    <div className="products__list">
      {products.map((product) => (
        <Fragment key={product.id}>
          <p> {product.title} </p>
          <button onClick={() => handleClick(product)}> remove </button>
        </Fragment>
      ))}
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState(data);

  return (
    <ul className="App">
      <ProductsList products={products} setProducts={setProducts} />
    </ul>
  );
}
