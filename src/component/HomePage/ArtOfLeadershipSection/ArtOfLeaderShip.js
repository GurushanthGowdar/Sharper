import ArtOfLeaderShip_bg from "../../../assets/ArtOfLeaderShip_bg.png";
import ArtOfLeaderInpirationText from "./ArtOfLeaderInpirationText";
import ArtOfLeaderShipCards from "./ArtOfLeaderShipCards";
import ArtOfLeadershipHeadings from "./ArtOfLeadershipHeadings";

const ArtOfLeaderShip = () => {
  const divStyle = {
    backgroundImage: `url(${ArtOfLeaderShip_bg})`,
  };

  const leadersImageUrls = [
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.8Tn9TFFyLavXs7WQIx2eFQHaE4&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.LDAzAIHmP1XzToR7t5RndQHaFs&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.HMxuGTl-hHzlbUyxz4IzgAHaE8&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.KHwaxK1BEbIHgqdlBQjvJAHaGL&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.ITAVGJjBcJY2onMNDL2CJgHaE1&pid=Api&P=0&h=180",
    },
    {
      url: "https://media.licdn.com/dms/image/D4E03AQHdPks2GnUz_Q/profile-displayphoto-shrink_200_200/0/1686302031471?e=1700092800&v=beta&t=8ocLaUUgSokiUVV_6sbklXnKm5NpGCky861fAvBRuKQ",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.FRqfrRreSOiyf2Bet6CxzwHaHa&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.QSMb4kV2MSCqkGBn1w0UIAHaEK&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="pb-28 ml-20 mr-20 text-white" style={divStyle}>
      <div className="grid grid-cols-1 pt-16 pl-28">
        <ArtOfLeadershipHeadings></ArtOfLeadershipHeadings>
        <div className="flex mt-20 ml-16">
          {leadersImageUrls.map((item) => {
            return (
              <ArtOfLeaderShipCards
                className="rounded-full w-[160px] h-[160px]"
                divclassName={"-ml-12"}
                imageurl={item.url}
              ></ArtOfLeaderShipCards>
            );
          })}
          {/* <ArtOfLeaderShipCards
            className="rounded-full w-36 h-36 w-[160px] h-[160px]"
            divclassName={"-ml-12"}
            imageurl="https://tse2.mm.bing.net/th?id=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&pid=Api&P=0&h=180"
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse3.mm.bing.net/th?id=OIP.8Tn9TFFyLavXs7WQIx2eFQHaE4&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse2.mm.bing.net/th?id=OIP.LDAzAIHmP1XzToR7t5RndQHaFs&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse2.mm.bing.net/th?id=OIP.HMxuGTl-hHzlbUyxz4IzgAHaE8&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse2.mm.bing.net/th?id=OIP.KHwaxK1BEbIHgqdlBQjvJAHaGL&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse3.mm.bing.net/th?id=OIP.ITAVGJjBcJY2onMNDL2CJgHaE1&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://media.licdn.com/dms/image/D4E03AQHdPks2GnUz_Q/profile-displayphoto-shrink_200_200/0/1686302031471?e=1700092800&v=beta&t=8ocLaUUgSokiUVV_6sbklXnKm5NpGCky861fAvBRuKQ"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse2.mm.bing.net/th?id=OIP.FRqfrRreSOiyf2Bet6CxzwHaHa&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards>
          <ArtOfLeaderShipCards
            className="rounded-full  w-[160px] h-[160px] "
            divclassName={"-ml-12"}
            imageurl={
              "https://tse3.mm.bing.net/th?id=OIP.QSMb4kV2MSCqkGBn1w0UIAHaEK&pid=Api&P=0&h=180"
            }
          ></ArtOfLeaderShipCards> */}
          <span className="mt-24 text-8xl font-bold">....</span>
        </div>
        <ArtOfLeaderInpirationText></ArtOfLeaderInpirationText>
        <div className="flex justify-center">
          <button
            type="button"
            className="text-white-900 w-40 mt-12 hover:text-gray-300 border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtOfLeaderShip;
