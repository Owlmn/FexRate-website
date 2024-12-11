"use client"

import Conversion from "@/app/main_page/page_components/conversion";
import Popular_exchange_pairs from "@/app/main_page/page_components/popular_exchange_pairs";
import Circle1 from "@/app/main_page/page_components/circle1";
import Circle2 from "@/app/main_page/page_components/circle2";
import Benefit from "@/app/main_page/page_components/benefit";
import Steps from "@/app/main_page/page_components/steps";
import Reviews from "@/app/main_page/page_components/reviews";
import Banner from "@/app/main_page/page_components/banner";

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
