import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import products from "../../../allproducts.json";
import { FaArrowLeftLong } from "react-icons/fa6";
import "react-image-gallery/styles/css/image-gallery.css";
import { Image, Shimmer } from "react-shimmer";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ProductDetail.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ProductDetail = () => {
  const form = useRef();
  const { id } = useParams();
  const product = products.find((p) => p.product_id === id);

  useEffect(() => {
    if (product) {
      document.title = `FireByte - ${product.product_name}`;
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <>
        <Header />
        <div className="product-error">
          <span>Product not found!</span>
        </div>
      </>
    );
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    product_name: product.product_name,
    name: "",
    company: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error"); // state to handle severity

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let validationErrors = [];

    if (!formData.name.trim()) {
      validationErrors.push("Name is required.");
    }
    if (!formData.company.trim()) {
      validationErrors.push("Company name is required.");
    }
    if (
      !formData.email.trim() ||
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)
    ) {
      validationErrors.push("Valid email is required.");
    }
    if (
      !formData.phone_number.trim() ||
      !/^[0-9]{10}$/.test(formData.phone_number)
    ) {
      validationErrors.push("Valid 10-digit phone number is required.");
    }
    if (!formData.message.trim()) {
      validationErrors.push("Message is required.");
    }

    // If there are validation errors, show a material Snackbar with the error
    if (validationErrors.length > 0) {
      setSnackbarMessage(validationErrors.join("\n"));
      setSnackbarSeverity("error"); // Set severity to error
      setSnackbarOpen(true);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationLink = `https://maps.google.com/?q=${latitude},${longitude}`;

          const updatedFormData = {
            ...formData,
            location: locationLink,
          };

          setSnackbarMessage("Sending Message, Please wait!");
          setSnackbarSeverity("info");
          setSnackbarOpen(true);
          setShow(false);

          emailjs
            .send(
              "service_b4h9u2v",
              "template_2dl7zw8",
              updatedFormData,
              "w4isniefRmd347s9K"
            )
            .then(
              (result) => {
                console.log(result.text);
                setSnackbarMessage("Message Sent Successfully!");
                setSnackbarSeverity("success"); // Set severity to success
                setSnackbarOpen(true);
              },
              (error) => {
                console.log(error.text);
                setSnackbarMessage("Failed to Send Message.");
                setSnackbarSeverity("error"); // Set severity to error
                setSnackbarOpen(true);
              }
            );
        },
        (error) => {
          setSnackbarMessage("Sending Message, Please wait!");
          setSnackbarSeverity("info");
          setSnackbarOpen(true);
          setShow(false);

          emailjs
            .send(
              "service_b4h9u2v",
              "template_2dl7zw8",
              formData,
              "w4isniefRmd347s9K"
            )
            .then(
              (result) => {
                setSnackbarMessage("Message Sent Successfully!");
                setSnackbarSeverity("success"); // Set severity to success
                setSnackbarOpen(true);
              },
              (error) => {
                console.log(error.text);
                setSnackbarMessage("Failed to Send Message.");
                setSnackbarSeverity("error"); // Set severity to error
                setSnackbarOpen(true);
              }
            );
        }
      );
    } else {
      setSnackbarMessage("Sending Message, Please wait!");
      setSnackbarSeverity("info");
      setSnackbarOpen(true);
      setShow(false);

      emailjs
        .send(
          "service_b4h9u2v",
          "template_2dl7zw8",
          formData,
          "w4isniefRmd347s9K"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSnackbarMessage("Message Sent Successfully!");
            setSnackbarSeverity("success"); // Set severity to success
            setSnackbarOpen(true);
          },
          (error) => {
            console.log(error.text);
            setSnackbarMessage("Failed to Send Message.");
            setSnackbarSeverity("error"); // Set severity to error
            setSnackbarOpen(true);
          }
        );
    }
  };

  return (
    <>
      <Header />
      <div className="product-detail-main">
        <Link to="/products" id="back">
          <FaArrowLeftLong /> All Products
        </Link>
        <div className="product-detail-container">
          <div className="product-card">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} // Adjust delay for staggered animation
            >
              <div className="top-content">
                <div className="left">
                  <div style={{ cursor: "pointer" }}>
                    <Carousel
                      emulateTouch="true"
                      autoPlay="true"
                      infiniteLoop="true"
                    >
                      {product.images.map((image, index) => (
                        <div>
                          <img src={image.original} key={index} />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className="right">
                  <h3 className="product-name" autoFocus={true}>{product.product_name}</h3>
                  <span
                    className="product-feature"
                    style={{ fontWeight: "200" }}
                  >
                    {product.tagline}
                  </span>
                  <p className="product-details" style={{ fontWeight: "400" }}>
                    {product.details}
                  </p>
                  <span>Starting price:</span>
                  <div className="price-container">
                    <span id="discounted-price">
                      {product.discounted_price}
                    </span>
                    <span id="actual-price">{product.actual_price}</span>
                  </div>
                  <div id="enquire-now">
                    <button onClick={handleShow}>Enquire Now</button>
                  </div>
                </div>
              </div>
            </motion.div>

            <h2>
              FEATURES <div className="separator"></div>
            </h2>
            <div className="features-contianer">
              {product.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <div className="text">
                    <ScrollReveal>
                      <h4>{feature.name}</h4>
                      <p>{feature.description}</p>
                    </ScrollReveal>
                  </div>
                  <div className="image_container">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      fallback={<Shimmer width={500} height={300} />}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity} // set the severity dynamically
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Modal
        show={show}
        onHide={handleClose}
        centered={true}
        enforceFocus={true}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Enquire - <b>{product.product_name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modelContainer">
          <Form ref={form}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="name"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                placeholder="Name"
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="company"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                placeholder="Company"
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="phone_number"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                placeholder="Phone Number"
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                name="email"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                placeholder="Your Email"
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                placeholder="Message"
                autoComplete="on"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-1 buttons" style={{ width: "100%" }}>
              <Button
                variant="dark"
                onClick={handleSubmit}
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#3279db",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductDetail;
