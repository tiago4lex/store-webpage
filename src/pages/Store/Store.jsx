import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "./Store.css";
import { FaShoppingCart } from "react-icons/fa";

import products from "../../data/products";
import { Link } from "react-router-dom";

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
                <Link to={`/product/${product.id}`} className="product-link">
                  <img
                    src={product.img}
                    alt={`Imagem do produto ${product.name}`}
                    className="product-img"
                  />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </Link>
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
