import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";

function About() {
  return (
    <div>
      <Carousel />
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <p>Name</p>
      <div>
        <img src="" alt="" />
      </div>
      <Tag />
      {/* ? Voir pour les stars ? */}
      <Dropdown />
    </div>
  );
}

export default About;
