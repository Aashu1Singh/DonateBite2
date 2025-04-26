import { useState, useEffect } from "react";
import bg1 from "../../assets/images/welcome-bg-1.jpg"
import bg2 from "../../assets/images/welcome-bg-2.jpg"

import bg3 from "../../assets/images/welcome-bg-3.jpg"
import bg4 from "../../assets/images/welcom-bg-4.jpg"

const slides = [
  {
    image: bg1,
    title: "SAVE FOOD, SHARE FOOD",
    description:
      "This initiative brings together all the stakeholders of the community to prevent food being lost or wasted throughout its supply chain",
  },
  {
    image: bg2,
    title: "REDUCE WASTE, FEED HOPE",
    description:
      "Join hands to minimize food wastage and build a sustainable future for everyone in the community.",
  },
  {
    image: bg3,
    title: "GIVE FOOD, GIVE LOVE",
    description:
      "Your small contribution can bring a big smile to someone's face. Donate food and spread happiness.",
  },
];

export default function HeroCarouselBootstrap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>
    
          {/* Slides */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height: "590px", position: "relative" }}
              >
                {/* Background image */}
                <img
                  src={slide.image}
                  className="d-block w-100"
                  alt={slide.title}
                  style={{ height: "590px", objectFit: "cover" }}
                />
                {/* Orange overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(224, 183, 106, 0.7)",
                  }}
                ></div>
    
                {/* Caption */}
                <div
                  className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100"
                  style={{ zIndex: 2 }}
                >
                  <h1 className="display-4 fw-bold">{slide.title}</h1>
                  <p className="lead fw-semibold mb-4">{slide.description}</p>
                  <a href="#know-more" className="btn btn-dark btn-lg rounded-pill">
                    Know More
                  </a>
                </div>
              </div>
            ))}
          </div>
    
          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
}
