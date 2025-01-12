// const Hero = ({ children, hero = "defaultHero" }) => {
//   return (
//     <header className={hero}>{children}</header>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";

const Hero = ({ images = [], autoPlay = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlay);
    return () => clearInterval(interval);
  }, [images.length, autoPlay]);

  return (
    <header
      className="defaultHero"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner">
        <h1>Welcome to Our Resort</h1>
        <p>Relax, Unwind, and Enjoy Your Stay</p>
      </div>
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </header>
  );
};

export default Hero;
