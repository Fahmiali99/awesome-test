import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/pages/Home";
import Footer from "./components/common/Footer";
import ScorePage from "./components/pages/Score";
import NamePage from "./components/pages/Name";

function App() {
  const [bright, setBright] = useState(false);
  function buttonBright() {
    const newBright = !bright;
    setBright(newBright);
    localStorage.setItem("bright", JSON.stringify(newBright));
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("bright");
    if (savedMode === "true") {
      setBright(true);
    }
  }, []);
  return (
    <div
      className={bright ? " bg-gray-800 text-white" : " bg-gray-100 text-black"}
    >
      <Navbar buttonBright={buttonBright} bright={bright} />
      <div className="container mx-auto">
        <div className=" px-3 md:px-0 lg:mx-44">
          <Routes>
            <Route path="/" element={<HomePage bright={bright} />} />
            <Route path="/score" element={<ScorePage bright={bright} />} />
            <Route path="/name" element={<NamePage bright={bright} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
