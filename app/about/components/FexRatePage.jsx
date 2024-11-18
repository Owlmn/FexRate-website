import React from "react";
import Hero from "./Hero";
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
        <Hero />
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
