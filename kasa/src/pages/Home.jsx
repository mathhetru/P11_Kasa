import Banner from "../components/Banner";
import Card from "../components/Card";

import background from "../assets/kasa_background-home.png";

function Home() {
  return (
    <div>
      <Banner img={background} sentence="Chez vous, partout et ailleurs" />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
