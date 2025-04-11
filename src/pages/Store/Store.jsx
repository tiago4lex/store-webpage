import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "./Store.css";
import { FaShoppingCart } from "react-icons/fa";

import brazaside from "../../assets/brazaside-shirt.jpeg";
import smokey from "../../assets/djsmokey-shirt.jpeg";
import cassete from "../../assets/bvndit-cassete.jpeg";
import vinyl from "../../assets/bvndit-vinyl.jpeg";

const products = [
  {
    id: 1,
    name: "BrazaSide Clan Shirt",
    price: "R$ 79,90",
    img: brazaside,
    type: "shirt",
    color: "black",
  },
  {
    id: 2,
    name: "DJ Smokey Shirt",
    price: "R$ 99,90",
    img: smokey,
    type: "shirt",
    color: "black",
  },
  {
    id: 3,
    name: "Most Wanted Cassete",
    price: "R$ 149,90",
    img: cassete,
    type: "cassete",
  },
  {
    id: 4,
    name: "Scratch Mix Vinyl",
    price: "R$ 199,90",
    img: vinyl,
    type: "vinyl",
  }
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
          <motion.button
            key={category}
            className={`filter-button ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.toUpperCase()}
          </motion.button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.img}
                  alt={`Imagem do produto ${product.name}`}
                  className="product-img"
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="buy-button">
                  <FaShoppingCart style={{ marginRight: "8px" }} />
                  BUY
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
}

export default Store;
