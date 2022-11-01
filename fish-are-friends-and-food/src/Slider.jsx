import React, {useState} from "react";
import FishCard from "./FishCard.jsx";

function Slider() {
  let currentSlide = 0;
  let gallery = document.querySelector(".gallery");

  let scrollUp = () => {
    const height = document.querySelector(".fishCard").clientHeight;
    const slideCount = document.querySelectorAll(".fishCard").length;
    console.log(slideCount);
    console.log(height);
    console.log(currentSlide);

    if (currentSlide < slideCount - 1) {
      currentSlide++;
      console.log(currentSlide);
      console.log(height * currentSlide);
      gallery.style.transform = `translateY(-${height * currentSlide}px)`;
      console.log(gallery.style.transform);
    } else {
      gallery.style.transform = `translateY(0)`;
    }
  };

  let scrollDown = () => {
    const height = document.querySelector(".fishCard").clientHeight;
    const slideCount = document.querySelectorAll(".fishCard").length;
    console.log(slideCount);
    console.log(height);
    console.log(currentSlide);

    if (currentSlide < slideCount && currentSlide >= 0) {
      currentSlide++;
      console.log(currentSlide);
      console.log(height * currentSlide);
      gallery.style.transform = `translateY(-${height * currentSlide}px)`;
      console.log(gallery.style.transform);
    } else {
      gallery.style.transform = `translateY(0)`;
    }
  };

  return (
    <div className="container">
      <div className="gallery">
        <FishCard />
      </div>
      <button className="upBtn" onClick={scrollUp}>
        U
      </button>
      <button className="downBtn" onClick={scrollDown}>
        D
      </button>
    </div>
  );
}

export default Slider;
