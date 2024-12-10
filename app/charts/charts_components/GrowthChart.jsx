import React from "react";
import "./GrowthChart.css";
import Image from "next/image";
import section1Image from "./section1.svg";

const Section1 = () => {
  return (
    <div className="section1-container">
      <Image src={section1Image} alt="" />
    </div>
  );
};

export default Section1;
