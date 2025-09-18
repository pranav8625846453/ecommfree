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
        imageURL={assets.Laptop_img}
        productName="LAPTOP"
        productDescription="Trade smarter with our ultra-fast platform—featuring live market data, powerful charts, and a beautifully simple interface. Enjoy the full Kite experience anytime, anywhere, on your laptop, Android, or iOS device."
      
      />
      <RightSection 
       imageURL={assets.pc_img}
        productName="PC"
        productDescription="Discover high-performance PCs built for work, gaming, and everyday use. With powerful processors, advanced graphics, and sleek designs, our PCs deliver speed, reliability, and efficiency. Perfect for professionals, creators, and gamers alike."
        />
      <LeftSection
        imageURL={assets.cctv_img}
        productName="CCTV CAMERA"
        productDescription="Stay protected with our high-definition CCTV cameras, designed for clear video monitoring, smart motion detection, and reliable 24/7 security. Easy to install and control, our cameras can be accessed anytime, anywhere from your laptop, Android, or iOS devices."
       
      />
      <RightSection
        imageURL={assets.service_img}
        productName="OTHER"
        productDescription="Explore a wide range of other electronics and accessories to complement your devices. From smart home gadgets and audio equipment to peripherals and innovative tech solutions, find everything you need to enhance your digital lifestyle."
       />
     
     
    </main>
  );
}
