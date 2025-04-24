import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Product.css";

import products from "../../data/products.js";

function Product() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [selectedSize, setSectedSize] = useState(null);
    const [mainImage, setMainImage] = useState(product.img);

    const sizes = ["P", "M", "G", "GG"];

    return (
      <div className="product-page">
        <div className="product-images">
          <img className="main-image" src={mainImage} alt={product.name} />
          <div className="thumbnail-gallery">
            <img
              src={product.img}
              alt="thumb"
              onClick={() => setMainImage(product.img)}
            />
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>

          {product.type === "shirt" && (
            <div className="sizes">
              <p>Select your size:</p>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    );
}

export default Product;