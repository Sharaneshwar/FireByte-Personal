import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/AllProducts/AllProducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Services />
              <FeaturedProducts />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<AllProducts />} /> {}
        <Route path="/about" element={<About />} /> {}
        <Route path="/product/:id" element={<ProductDetail />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
