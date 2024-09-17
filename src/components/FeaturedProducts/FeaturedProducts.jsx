import React from "react";
import "./FeaturedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import ScrollReveal from "../ScrollReveal";

const Featured = () => {
  return (
    <ScrollReveal>
      <section className="featured-section">
        <h2 className="heading">
          Featured <span className="bold">Products</span>
        </h2>
        <ProductCard />
        <Link to="/products" className="view-all">
          View All Products <RiArrowRightLine />
        </Link>
      </section>
    </ScrollReveal>
  );
};

export default Featured;
