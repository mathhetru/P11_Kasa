import React, { useState } from "react";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const picturesLength = props.pictures.length;

  const picturesCount = () => {
    return currentIndex + 1 + "/" + picturesLength;
  };

  const nextPicture = () => {
    if (currentIndex === props.pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPicture = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <button className="carousel__buttons button-left" onClick={previousPicture} />
      {/* pourquoi "onClick={previousPicture()}" cause une erreur et pas "onClick={previousPicture}" ?*/}
      <div className="carousel-picture">
        <img
          src={props.pictures[currentIndex]}
          alt="example of the house"
          className="carousel-picture__img"
        />
        <p className="carousel-picture__count">{picturesCount()}</p>
      </div>
      <button className="carousel__buttons button-right" onClick={nextPicture} />
    </div>
  );
}

export default Carousel;
