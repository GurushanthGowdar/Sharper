import ValuesCard from "./ValuesCard";
import ValuesText from "./ValuesText";
import ValuesBackgroundImage from "../../../assets/ValuesBackgroundImage.png";

const Values = () => {
  const divStyle = {
    backgroundImage: `url(${ValuesBackgroundImage})`,
    // Add any other CSS styles you want here
  };

  return (
    <div className="flex h-[85vh] bg-cover  ml-20 mr-20 pr-0" style={divStyle}>
      <ValuesText></ValuesText>
      <div className="grid grid-cols-2 mr-0">
        <ValuesCard
          className={
            "h-[28vh] text-white flex justify-center  bg-black w-[28vh] mt-28  ml-40"
          }
        ></ValuesCard>
        <ValuesCard
          className={
            "h-[28vh] text-white flex justify-center bg-black w-[28vh] mt-12 ml-10"
          }
        ></ValuesCard>
        <ValuesCard
          className={
            "h-[28vh] text-white flex justify-center bg-black w-[28vh] mt-6 ml-40"
          }
        ></ValuesCard>
        <ValuesCard
          className={
            "h-[28vh] text-white flex justify-center bg-black w-[28vh] -mt-14 ml-10"
          }
        ></ValuesCard>
      </div>
    </div>
  );
};

export default Values;
