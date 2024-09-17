import React from "react";
import Header from "../../components/Header/Header";
import "./AllProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollReveal from "../ScrollReveal";

const AllProducts = () => {
  return (
    <>
      <Header />
      <ScrollReveal>
        <div className="products-main">
          <div className="top">
            <div className="products-icon">
              <AiFillProduct />
            </div>
            <h2 className="heading">
              All <span className="bold">Products</span>
            </h2>
          </div>
          <ProductCard />
        </div>
      </ScrollReveal>
      <Footer fixed='productsFixed' />
    </>
  );
};

export default AllProducts;
