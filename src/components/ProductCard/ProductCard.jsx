import React from "react";
import products from "../../../allproducts.json";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Image, Shimmer } from "react-shimmer";

const ProductCard = () => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Link
          to={`/product/${product.product_id}`}
          className="product-card"
          key={index}
          style={{
            background: `linear-gradient(320deg, ${
              product.color + "3e"
            }, #90909023 50%)`,
          }}
        >
          <Image
            className="product-image"
            fallback={<Shimmer height={300} />}
            src={product.product_image}
            alt={product.product_name}
          />
          <h3 className="product-name">{product.product_name}</h3>
          <span className="product-feature">{product.tagline}</span>
          {/* <a className='view-more' href='https://www.notion.so/mohammadsaad-mulla/FoodFlow-Simplifying-campus-dining-7a3a43a0d1994ecc8bfdee09006d8c92' target="_blank" rel="noopener noreferrer">View More <FaArrowRightLong/></a> */}
          {/* <span className='view-more'>View More <FaArrowRightLong /></span> */}
          {/* <p className="product-details">{product.details}</p> */}
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
