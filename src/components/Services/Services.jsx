import React from "react";
import "./Services.css";
import { Image, Shimmer } from "react-shimmer";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const servicesData = [
  {
    image: "https://i.postimg.cc/2SZb004X/Web-Development.jpg",
    title: "Web Development",
    description:
      "We create responsive, scalable web apps using modern tech to deliver exceptional user experiences across all devices.",
  },
  {
    image: "https://i.postimg.cc/wBWkpWGc/Mobile-App-Development.png",
    title: "Mobile App Development",
    description:
      "Our mobile solutions offer seamless cross-platform support and an intuitive interface, tailored to meet your business needs.",
  },
  {
    image: "https://i.postimg.cc/zvWzNc0y/desktop-development.jpg",
    title: "Desktop Development",
    description:
      "We specialize in creating powerful desktop applications that are robust, highly secure, and exceptionally easy to use.",
  },
  {
    image: "https://i.postimg.cc/W30pLy9h/iot-solutions.jpg",
    title: "IoT Solutions",
    description:
      "Our IoT solutions connect devices to the cloud, enabling real-time data analysis and automation for smarter operations.",
  },
];

const Services = () => {
  return (
    <ScrollReveal>
      <section className="services">
        <h2 className="heading">
          Our <span className="bold">Services</span>
        </h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-title">{service.title}</span>
              <div className="divider" />
              <p className="service-description">{service.description}</p>
              <div className="service-image">
                <Image
                  fallback={<Shimmer height="150px" width="300px" />}
                  src={service.image}
                  alt={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Services;
