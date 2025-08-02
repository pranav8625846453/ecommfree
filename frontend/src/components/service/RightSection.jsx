import React from "react";
import "./ServiceSection.css";

export default function RightSection({
  imageURL,
  productName,
  productDescription
}) {
  return (
    <section className="service-section reverse">
      <div className="service-section__image">
        <img src={imageURL} alt={productName} />
      </div>
      <div className="service-section__content">
        <h1>{productName}</h1>
        <p>{productDescription}</p>
      </div>
    </section>
  );
}
