import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/${props.id}`} className="accomodation-card">
      <h2 className="accomodation-card__text">{props.title}</h2>
      <div className="accomodation-card-picture">
        <img src={props.img} alt="accomodation-card" className="accomodation-card-picture__img" />
      </div>
    </Link>
  );
}

export default Card;
