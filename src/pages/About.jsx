import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import background from "../assets/kasa_background-about.png";

function About() {
  return (
    <div>
      <Banner img={background} />
      <Dropdown />
    </div>
  );
}

export default About;
