import Banner from "../components/Banner";
import Card from "../components/Card";
import background from "../assets/kasa_background-home.png";

const sentenceForBanner = () => {
  return <h1 className="banner-background__text">Chez vous, partout et ailleurs</h1>;
};

function Home() {
  return (
    <div className="home">
      <Banner img={background} sentence={sentenceForBanner()} />
      <aside className="home-greycard">
        <Card />
      </aside>
    </div>
  );
}

export default Home;
