import Banner from "../components/Banner";
import Card from "../components/Card";
import background from "../assets/kasa_background-home.png";
import data from "../data/housing.json";

const sentenceForBanner = () => {
  return <h1 className="banner-background__text">Chez vous, partout et ailleurs</h1>;
};

function Home() {
  return (
    <div className="home">
      <div></div>
      <Banner img={background} sentence={sentenceForBanner()} />
      <aside className="home-greycard">
        {data.map((house) => (
          <Card
            img={house.cover}
            key={house.id}
            value={house.id}
            id={house.id}
            title={house.title}
          />
        ))}
      </aside>
    </div>
  );
}

export default Home;
