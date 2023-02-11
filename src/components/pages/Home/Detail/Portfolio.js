import React from "react";
import { data } from "../../../utils/Project/data";
import DetailPortfolio from "../Components/DetailPortfolio";
import { RoughNotation } from "react-rough-notation";

function Portfolio({ bright }) {
  return (
    <div>
      <h1 className="text-2xl font-medium pb-2">
        <RoughNotation
          type="underline"
          show
          strokeWidth={2}
          padding={5}
          color="#999999"
        >
          Portfolio
        </RoughNotation>
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 my-4 ">
        {data.map((item, idx) => {
          const technology = item.technology;

          const setLength = item.story;
          let substring = setLength.substring(0, 128);
          const maxLength = 125;
          if (substring.length > maxLength) {
            substring = substring.substring(0, maxLength) + "...";
          }
          return (
            <DetailPortfolio
              key={idx}
              title={item.title}
              href={item.href}
              image={item.image}
              subString={substring}
              technology={technology}
              bright={bright}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
