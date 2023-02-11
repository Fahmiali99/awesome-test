import React from "react";
import { data } from "../../../utils/Summary/data";
import { RoughNotation } from "react-rough-notation";

function Summary() {
  return (
    <div>
      {data.map((item, idx) => {
        const subSummary = item.subSummary;
        return (
          <div key={idx}>
            <h1 className="text-2xl font-medium pb-2">
              <RoughNotation
                type="underline"
                show
                strokeWidth={2}
                padding={5}
                color="#999999"
              >
                {item.title}
              </RoughNotation>
            </h1>
            {subSummary.map((item, idx) => (
              <div key={idx} className=" text-justify py-1">
                <p>{item.describe}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Summary;
