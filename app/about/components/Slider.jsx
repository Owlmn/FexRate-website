import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <button
        className={`${styles.sliderDot} ${styles.active}`}
        aria-label="Slide 1"
      ></button>
      <button className={styles.sliderDot} aria-label="Slide 2"></button>
      <button className={styles.sliderDot} aria-label="Slide 3"></button>
      <button className={styles.sliderDot} aria-label="Slide 4"></button>
      <button className={styles.sliderDot} aria-label="Slide 5"></button>
    </div>
  );
};

export default Slider;
