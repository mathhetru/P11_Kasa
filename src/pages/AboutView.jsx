import Banner from "../components/Banner";
import Collapsible from "../components/Collapsible";
import background from "../assets/kasa_background-about.png";
import data from "../data/values.json";

function About() {
  const contentCollapsible = (content) => {
    return <p>{content}</p>;
  };

  return (
    <div className="about">
      <Banner img={background} />
      <div className="about-collapsibles">
        {data.map((value) => (
          <Collapsible key={value.id} title={value.title}>
            {contentCollapsible(value.text)}
          </Collapsible>
        ))}
      </div>
    </div>
  );
}

export default About;
