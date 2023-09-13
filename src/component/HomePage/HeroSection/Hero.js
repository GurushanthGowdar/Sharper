import HeroImage from "./HeroImage";
import Vison from "./Vison";

import HeroSection_Bg from "../../../assets/HeroSection_Bg.png";

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${HeroSection_Bg})`,
    // Add any other CSS styles you want here
  };

  return (
    <div>
      <div
        className="flex text-white pt-16 bg-repeat-x pb-28 ml-20 justify-between pr-20 mr-20"
        style={divStyle}
      >
        <Vison></Vison>
        <HeroImage></HeroImage>
      </div>
    </div>
  );
};

export default Hero;
