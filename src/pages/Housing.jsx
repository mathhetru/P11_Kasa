import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import data from "../data/housing.json";
import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();
  const house = data.find((house) => house.id === id);

  return (
    <div className="housing">
      <Carousel pictures={house.pictures} />
      <div className="housing-header">
        <div className="housing-header-description">
          <h1 className="housing-header-description__title">{house.title}</h1>
          <h2 className="housing-header-description__subtitle">{house.location}</h2>
        </div>
        <div className="housing-header-host">
          <p className="housing-header-host__name">{house.host.name}</p>
          <div className="housing-header-host-picture">
            <img
              src={house.host.picture}
              alt="house's host"
              className="housing-header-host-picture__img"
            />
          </div>
        </div>
      </div>

      <Tag tags={house.tags} />
      {/* ? Voir pour les stars ? */}
      <Dropdown description={house.description} />
      <Dropdown equipments={house.equipments} />
    </div>
  );
}

export default Housing;
