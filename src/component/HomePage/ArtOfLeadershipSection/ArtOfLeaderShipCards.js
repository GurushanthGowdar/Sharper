const ArtOfLeaderShipCards = (props) => {
  return (
    <div
      className={props.divclassName ? props.divclassName : ""}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <img
        className={
          props.className ? props.className : "rounded-full w-36 h-36 bg-white"
        }
        src={
          props.imageurl
            ? props.imageurl
            : "https://c.wallhere.com/photos/aa/9a/Modi_narendra_modi_India_Prime_Minister-1588355.jpg!d"
        }
      ></img>
    </div>
  );
};

export default ArtOfLeaderShipCards;
