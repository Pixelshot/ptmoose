import React from "react";
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          Don't use <mark className="marked_amber">motivation</mark>
          <br />
          as your
          <mark className="marked_red"> excuse</mark>.
        </div>
      </div>
    </div>
  );
};

export default Featured;
