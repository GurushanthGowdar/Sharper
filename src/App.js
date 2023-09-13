import ArtOfLeaderShip from "./component/HomePage/ArtOfLeadershipSection/ArtOfLeaderShip";
import Hero from "./component/HomePage/HeroSection/Hero";
import HomePage from "./component/HomePage/HomePage";
import Values from "./component/HomePage/Values/Values";
import HeroSection_Bg from "../src/assets/HeroSection_Bg.png";
import NewsAndHiglights from "./component/NewsAndHiglights/NewsAndHiglights";

function App() {
  const divStyle = {
    backgroundImage: `url(${HeroSection_Bg})`,
    // Add any other CSS styles you want here
  };

  return (
    <div className="bg-black bg-no-repeat">
      <HomePage></HomePage>
      <Hero></Hero>
      <Values></Values>
      <ArtOfLeaderShip></ArtOfLeaderShip>
      <NewsAndHiglights></NewsAndHiglights>
    </div>
  );
}

export default App;
