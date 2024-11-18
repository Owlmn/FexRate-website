import React from "react";
import Slider from "./Slider";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Advantages from "./Advantages";
import CallToAction from "./CallToAction";
import styles from "./FexRatePage.module.css";

const FexRatePage = () => {
  return (
    <div className={styles.fexRatePage}>
      <main>
        <Slider />
        <AboutUs />
        <Features />
        <Advantages />
        <CallToAction />
      </main>
    </div>
  );
};

export default FexRatePage;
