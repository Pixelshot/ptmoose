import React from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpeg";
import slide_three from "../../resources/images/slide_three.jpeg";
import slide_four from "../../resources/images/slide_four.jpeg";
import slide_five from "../../resources/images/slide_five.jpeg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`, // this is to measure the height of the screen for the component to match, making pictures cover the whole window.
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_wrapper"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_wrapper"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_wrapper"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_wrapper"
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_wrapper"
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
