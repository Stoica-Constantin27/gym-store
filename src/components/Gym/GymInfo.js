import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GymInfo = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselImages = [
    { src: "/carouselImages/gym.jpg", alt: "Gym Equipment" },
    { src: "/carouselImages/personalTrainer.jpg", alt: "Personal Training" },
    { src: "/carouselImages/groupClasses.jpg", alt: "Group Classes" },
    { src: "/carouselImages/gym2.jpg", alt: "Yoga Session" },
    { src: "/carouselImages/supplements.png", alt: "Gym Interior" },
  ];

  return (
    <div className="gym-info">
      <h2>Welcome to Our Gym</h2>

      <Slider {...carouselSettings} className="gym-carousel">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>

      <p>
        We offer state-of-the-art equipment and expert trainers to help you
        reach your fitness goals!
      </p>

      <h3>Hours of Operation</h3>
      <ul>
        <li>Monday - Friday: 6 AM - 10 PM</li>
        <li>Saturday: 8 AM - 8 PM</li>
        <li>Sunday: 8 AM - 6 PM</li>
      </ul>

      <h3>Membership Plans</h3>
      <ul>
        <li>Basic Plan: $29/month - Access to gym facilities</li>
        <li>
          Premium Plan: $49/month - Includes group classes and personal training
          sessions
        </li>
        <li>
          VIP Plan: $79/month - All-inclusive access with advanced personal
          training
        </li>
      </ul>

      <h3>Fitness Classes</h3>
      <ul>
        <li>Yoga: Monday, Wednesday, Friday - 7 AM</li>
        <li>HIIT: Tuesday, Thursday - 6 PM</li>
        <li>Strength Training: Monday, Wednesday - 5 PM</li>
      </ul>

      <Link to="/signup">
        <button className="join-now-btn">Join Now</button>
      </Link>

      <div className="testimonials">
        <h3>What Our Members Say</h3>
        <p>
          “This gym completely changed my life. The trainers are excellent, and
          the equipment is top-notch!” – Sarah L.
        </p>
        <p>
          “I love the group classes, especially the yoga sessions. The
          atmosphere is motivating and friendly.” – John M.
        </p>
      </div>
    </div>
  );
};

export default GymInfo;
