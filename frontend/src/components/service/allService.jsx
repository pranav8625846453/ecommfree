import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import { assets } from "../../assets/assets";

export default function AllService() {
  return (
    <main>
      <Hero />
      <LeftSection
        imageURL={assets.service_img}
        productName="LAPTOP"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      
      />
      <RightSection 
       imageURL={assets.service_img}
        productName="OLD LAPTOP"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        />
      <LeftSection
        imageURL={assets.service_img}
        productName="PC"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
       
      />
      <RightSection
        imageURL={assets.service_img}
        productName="CCTV"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       />
      <LeftSection
        imageURL={assets.service_img}
        productName="OTHER"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      
      />
     
    </main>
  );
}
