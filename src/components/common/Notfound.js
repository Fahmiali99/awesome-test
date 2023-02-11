import React from "react";
import notfound from "../assets/notfound.png";
function Notfound() {
  return (
    <div className="grid justify-center text-center items-center min-h-[calc(100vh-2.9rem)]">
      <div>
        <div className="flex justify-center">
          <img src={notfound} alt="" width={400} />
        </div>
        <p className=" text-2xl tracking-tight font-bold md:text-4xl ">
          Sorry, the page is not available!
        </p>
        <div className="pt-8">
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
