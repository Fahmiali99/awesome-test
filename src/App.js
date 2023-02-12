import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Notfound from "./components/common/Notfound";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/pages/Home";
import Footer from "./components/common/Footer";
import ScorePage from "./components/pages/Score";
import NamePage from "./components/pages/Name";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [bright, setBright] = useState(false);

  function toggleMenu() {
    setNavbar(!navbar);
  }

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
      <Navbar
        toggleMenu={toggleMenu}
        buttonBright={buttonBright}
        bright={bright}
        navbar={navbar}
      />
      <div className="container mx-auto">
        <div className=" px-3 md:px-0 lg:mx-44">
          <Routes>
            <Route path="*" element={<Notfound />} />
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
