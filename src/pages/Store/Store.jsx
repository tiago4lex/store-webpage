import { useState } from "react";
import "../Store.css";

const products = [
  {
    id: 1,
    name: "BrazaSide Clan Shirt",
    price: "R$ 79,90",
    img: "LINK",
    type: "shirt",
    color: "black",
  },
  {
    id: 2,
    name: "DJ Smokey Shirt",
    price: "R$ 99,90",
    img: "LINK",
    type: "shirt",
    color: "black",
  },
  {
    id: 3,
    name: "BVNDIT - Most Wanted Cassete Tape",
    price: "R$ 149,90",
    img: "LINK",
    type: "cassete",
  },
  {
    id: 4,
    name: "BVNDIT - Scratch Mix Vinyl",
    price: "R$ 199,90",
    img: "LINK",
    type: "vinyl",
  },
];

function Store() {
    const [filter, setFilter] = useState("all");

    const categories = ["all", "shirt", "cassete", "vinyl"];

    const filteredProducts = 
        filter === "all" ? products : products.filter((p) => p.type === filter);

  return (
    <div className="store-container">
      <h1>PRODUCTS</h1>

      <div className="filter-buttons">
        {categories.map((category) => (
            <button
                key={category}
                className={`filter-button ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
            >
                {category.toUpperCase()}
            </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="buy-button">BUY</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available in this category.</p>
      )}

    </div>
  );
}

export default Store;
