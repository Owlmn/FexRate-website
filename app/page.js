"use client"

import "./styles/globals.css"
import Conversion from "@/app/components/page_components/conversion";
import Popular_exchange_pairs from "@/app/components/page_components/popular_exchange_pairs";
import Circle1 from "@/app/components/page_components/circle1";
import Circle2 from "@/app/components/page_components/circle2";
import Benefit from "@/app/components/page_components/benefit";
import Steps from "@/app/components/page_components/steps";
import Reviews from "@/app/components/page_components/reviews";
import Banner from "@/app/components/page_components/banner";

export default function MainPage() {

  return (
      <div className="content">
          <Conversion/>
          <Popular_exchange_pairs/>
          <Circle1/>
          <Benefit/>
          <Steps/>
          <Circle2/>
          <Reviews/>
          <Banner/>
      </div>
  );
}
