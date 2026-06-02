import { useState, useEffect } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
        );
        const result = await response.json();
        if (result && result.products && result.products.length) {
          setProducts((prevProducts) => [...prevProducts, ...result.products]);
          setLoading(false);
        }
        console.log(result);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    fetchData();
  }, [count]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }
  return (
    <div className="container">
      <div className="products">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product-card" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
}
