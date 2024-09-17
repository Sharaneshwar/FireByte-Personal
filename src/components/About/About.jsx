import React from "react";
import "./About.css";
import aboutImage from "/assets/images/about2.png";
import { Image, Shimmer } from "react-shimmer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollReveal from "../ScrollReveal";

const About = () => {
	return (
		<>
			<Header />
			<div className="about-main">
				<ScrollReveal>
					<div className="about-us-container">
						<div className="about-us-image">
							<Image
								src="https://i.postimg.cc/652xMHZ8/about-us.png"
								fallback={<Shimmer width={500} height={300} />}
								alt="Futuristic Services"
							/>
						</div>
						<div className="about-us-content">
							<h2>
								About <span className="bold">FireByte</span>
							</h2>
							<p>
								At FireByte Technologies, we are committed to delivering
								cutting-edge solutions for Web Development, Mobile App
								Development, Desktop Development, and IoT Solutions. Our team of
								experts focuses on building innovative, future-ready products
								that drive digital transformation and efficiency across
								industries. Whether it's creating highly interactive web
								platforms or implementing complex IoT infrastructures, we ensure
								that our solutions are scalable, reliable, and tailored to meet
								specific client needs.
							</p>
						</div>
					</div>
				</ScrollReveal>
			</div>
			<Footer fixed='fixed'/>
		</>
	);
};

export default About;
