import { useState } from "react";
import Typed from "react-typed";

const Vison = () => {
  const [showReadMore, setReadmore] = useState(false);

  const typeCompleteHandler = () => {
    setReadmore(true);
  };

  return (
    <div className="w-1/2 mt-36 ml-10">
      <h2 className="text-4xl font-semibold">Our Vision At </h2>
      <h2 className="text-8xl font-bold">MBRDI</h2>
      <p className="break-words w-10/12 mt-10 ">
        <Typed
          strings={[
            "With rapidly evolving customer expectations, we need to adapt and react quickly with minimal turnaround time. This transformation will enable us to be future-ready and heighten our industry competitiveness. The next phase of 2023 will be a crucial one. So, let's bring our best to the table - anticipating trends and creating solutions for the future",
          ]}
          typeSpeed={10}
          className="mb-5 text-2xl italic"
          onComplete={typeCompleteHandler}
        ></Typed>
      </p>
      {showReadMore && (
        <button
          type="button"
          className="text-white-900 mt-12 hover:text-gray-300 border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default Vison;
