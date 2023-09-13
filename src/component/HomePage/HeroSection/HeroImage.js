import Hero_image from "../../../assets/Hero_image.png";

const HeroImage = () => {
  return (
    <div className="relative z-10">
      <img
        alt="HeroSectionImage"
        data-aos="zoom-in"
        data-aos-duration="1000"
        src={Hero_image}
        className="ml-20"
      ></img>
    </div>
  );
};

export default HeroImage;
