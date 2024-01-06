function Carousel(props) {
  return (
    <div className="carousel">
      {/* {props.pictures.map((picture, index) => (
        <img key={index} src={picture} alt="example of the house" />
      ))} */}
      <img src={props.pictures[0]} alt="example of the house" className="carousel__img" />
    </div>
  );
}

export default Carousel;
