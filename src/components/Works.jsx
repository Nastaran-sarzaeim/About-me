import React from "react";

function Works() {
  return (
    <div>
      <div className="bg-background-main flex items-center justify-around mt-10 md:mt-24 lg:mt-32 h-screen flex-col sm:flex-row">
        <div className="flex flex-col items-center md:w-2/4 w-full text-light-green mb-5">
          <h1 className="font-bold text-5xl lg:text-6xl m-5">
            P o r t f o l i o
          </h1>
          <div>
            <span className="mr-10">S i m p l e </span>
            <span>P r o j e c t </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-light-gray opacity-90 relative w-[90%] md:w-full">
            <img
              src="./public/Journaling.png"
              className="md:w-[90%] md:ml-6 pt-10 w-[80%] ml-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
