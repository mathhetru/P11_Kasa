import redStar from "../assets/kasa_star-red.svg";
import greyStar from "../assets/kasa_star-grey.svg";

function Stars(props) {
  const stars = [];

  while (stars.length < 5) {
    if (stars.length < props.stars) {
      stars.push(<img src={redStar} alt="red star" key={stars.length} className="stars__img" />);
    } else {
      stars.push(<img src={greyStar} alt="grey star" key={stars.length} className="stars__img" />);
    }
  }

  return <div className="stars">{stars}</div>;
}

export default Stars;
