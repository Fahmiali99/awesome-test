import React from "react";

import Introduction from "./Detail/Introduction";
import Summary from "./Detail/Summary";
import Portfolio from "./Detail/Portfolio";

function HomePage({ bright }) {
  return (
    <div>
      <Introduction bright={bright} />
      <Summary />
      <Portfolio bright={bright} />
    </div>
  );
}

export default HomePage;
