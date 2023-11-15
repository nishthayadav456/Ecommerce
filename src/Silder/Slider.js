import React, { useState, useEffect } from "react";
import './Slider.css'
const Slider= () => {
  const images = [
    "https://media.istockphoto.com/id/1085149318/photo/sale-sign-at-the-entrance-of-clothing-store.jpg?s=2048x2048&w=is&k=20&c=djsZESezbn68GL8b20XJ50Wd-d6E0cdEXfA1rD0PPHI=",
    "https://media.istockphoto.com/id/1171892996/photo/70-off-sales-promotion-on-retail-shop-display-window-black-friday-clearance-mega-sale.jpg?s=612x612&w=0&k=20&c=WLQaCqVJb1o_VBux-BrSRo9xAN8bIR2DSxDNiOmd-bA=",
    "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/972083114/photo/store-window-at-sales.jpg?s=612x612&w=0&k=20&c=Io7YVw6U_aJo-M8PN_B2qlXDmtINBBc12ibnZw-XYKE=",
    "https://media.istockphoto.com/id/1345106015/photo/shot-of-a-floor-standing-lcd-touch-screen-display-with-user-interface-of-online-clothing-shop.jpg?s=2048x2048&w=is&k=20&c=sdE6v1t-Gd5sSJrL0yZ4c7PZhGY15PUjz7ScDWVLtvk=",
    // Add more image URLs as needed
  ];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  const handleClick = (index) => {
    setCurrentImage(index);
  };
  return (
    <div className="first-container">
      <div
        className="wrapper"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="shoping-item">
            <img src={image} alt={`Img ${index}`} />
          </div>
        ))}
      </div>
      <div className="second-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? "activedot" : ""}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slider;