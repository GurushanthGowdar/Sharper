const ValuesCard = (props) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      className={
        props.className
          ? props.className
          : "h-[26vh] text-white flex justify-center bg-black w-[28vh] mt-28 ml-40"
      }
    >
      <p className="mt-20 text-xl">{props.values ? props.values : "value 1"}</p>
    </div>
  );
};

export default ValuesCard;
