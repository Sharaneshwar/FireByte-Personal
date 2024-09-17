import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { Image, Shimmer } from "react-shimmer";
import ScrollReveal from "../ScrollReveal";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone_number: "",
    service: "",
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
    if (!formData.service.trim()) {
      validationErrors.push("Please select a service type.");
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

    // Proceed with geolocation and email sending if no validation errors
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

          emailjs
            .send(
              "service_b4h9u2v",
              "template_b2socy9",
              updatedFormData,
              "w4isniefRmd347s9K"
            )
            .then(
              (result) => {
                console.log(result.text);
                setSnackbarMessage("Message Sent Successfully!");
                setSnackbarSeverity("success"); // Set severity to success
                setSnackbarOpen(true);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone_number: "",
                  service: "",
                  message: "",
                });
                form.current.reset();
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

          emailjs
            .send(
              "service_b4h9u2v",
              "template_b2socy9",
              formData,
              "w4isniefRmd347s9K"
            )
            .then(
              (result) => {
                console.log(result.text);
                setSnackbarMessage("Message Sent Successfully!");
                setSnackbarSeverity("success"); // Set severity to success
                setSnackbarOpen(true);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone_number: "",
                  service: "",
                  message: "",
                });
                form.current.reset();
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

      emailjs
        .send(
          "service_b4h9u2v",
          "template_b2socy9",
          formData,
          "w4isniefRmd347s9K"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSnackbarMessage("Message Sent Successfully!");
            setSnackbarSeverity("success"); // Set severity to success
            setSnackbarOpen(true);
            setFormData({
              name: "",
              company: "",
              email: "",
              phone_number: "",
              service: "",
              message: "",
            });
            form.current.reset();
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
    <ScrollReveal>
      <div className="contact-us">
        <h2 className="heading">
          Contact <span className="bold">Us</span>
        </h2>
        <div className="contact-us-container">
          <div className="contact-us-image">
            <Image
              fallback={<Shimmer width={200} height={100} />}
              src="https://i.postimg.cc/ZnfVn8t0/contact-us.png"
            />
          </div>
          <div className="contact-us-form">
            <Form ref={form}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="Company"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 select-arrow"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  as="select"
                  name="service"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service Type</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Desktop Development">
                    Desktop Development
                  </option>
                  <option value="IOT Solutions">IOT Solutions</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Message"
                  autoComplete="on"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-1 buttons">
                <Button variant="dark" onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>

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
    </ScrollReveal>
  );
};

export default Contact;
