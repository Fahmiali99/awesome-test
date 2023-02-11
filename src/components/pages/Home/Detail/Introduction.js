import React from "react";
import fahmi from "../../../assets/me.png";
import { RoughNotation } from "react-rough-notation";

function Introduction({ bright }) {
  return (
    <div>
      <div className="h-full grid items-center pt-28 pb-10 md:py-72">
        <div className="">
          <div className="block md:flex md:justify-between items-center">
            <div className="text-center sm:text-center md:text-left ">
              <h1 className="text-4xl sm:text-6xl xl:text-8xl font-bold dark:text-white">
                Fahmi Ali Husni
              </h1>
              <h1
                className={
                  bright
                    ? `  py-5 text-2xl sm:text-4xl xl:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-cyan-400`
                    : `   py-5 text-2xl sm:text-4xl xl:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-sky-500`
                }
              >
                <RoughNotation
                  type="underline"
                  show
                  strokeWidth={2}
                  padding={5}
                  color="#999999"
                >
                  Frontend Developer
                </RoughNotation>
              </h1>
            </div>
            <div className="flex justify-center pt-7 sm:pt-0">
              <img
                src={fahmi}
                className=" w-40  md:w-52"
                alt="Fahmi Ali Husni"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
