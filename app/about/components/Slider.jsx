"use client";

import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Простые цветные слайды
  const slides = ["#ff5733", "#33c9ff", "#85ff33", "#ff33bb", "#f5ff33"];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        {/* Слайды */}
        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((color, index) => (
              <div
                key={index}
                className={styles.slide}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Стрелки */}
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          &#9664;
        </button>
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={handleNext}
          aria-label="Next Slide"
        >
          &#9654;
        </button>
      </div>

      {/* Индикаторы */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
