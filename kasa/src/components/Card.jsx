import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/" className="accomodation-card">
      <h2 className="accomodation-card__text">
        Titre de la
        <br /> location
      </h2>
      <div>
        {/* <img src={props.img} alt="accomodation-card" className="accomodation-card__img" /> */}
      </div>
    </Link>
  );
}

export default Card;
