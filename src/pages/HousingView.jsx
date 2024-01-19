import Carousel from "../components/Carousel";
import Collapsible from "../components/Collapsible";
import Tags from "../components/Tags";
import RatingStars from "../components/RatingStars";
import data from "../data/housing.json";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";

function Housing() {
  const { id } = useParams();
  const house = data.find((house) => house.id === id);

  useEffect(() => {
    if (house) {
      document.title = `${house.title}`;
    }
  }, [house]);

  if (!house) {
    return <Navigate to="/page-not-found" />;
  }

  const EquipmentsCollapsible = (content) => {
    if (content.equipments) {
      return (
        <div>
          {content.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </div>
      );
    }
  };

  const descriptionCollapsible = (content) => {
    return <p>{content}</p>;
  };

  return (
    <div className="housing">
      <Carousel pictures={house.pictures} />
      <div className="housing-header">
        <div className="housing-header-description">
          <h1 className="housing-header-description__title">{house.title}</h1>
          <h2 className="housing-header-description__subtitle">{house.location}</h2>
          <Tags tags={house.tags} />
        </div>
        <div className="housing-header-host">
          <div className="housing-header-host__group">
            <p className="housing-header-host__name">{house.host.name}</p>
            <div className="housing-header-host-picture">
              <img
                src={house.host.picture}
                alt="house's host"
                className="housing-header-host-picture__img"
              />
            </div>
          </div>
          <RatingStars stars={house.rating} />
        </div>
      </div>

      <div className="housing-description">
        <Collapsible title={"Description"}>{descriptionCollapsible(house.description)}</Collapsible>
        <Collapsible title={"Equipements"}>{EquipmentsCollapsible(house)}</Collapsible>
      </div>
    </div>
  );
}

export default Housing;
