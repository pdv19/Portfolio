import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import PortfolioTest from "../pages/PortfolioTest";
import Portraiture from "../pages/project/Portraiture";
import Editorial from "../pages/project/Editorial";
import Commercial from "../pages/project/Commercial";
import { Routes, Route, useLocation } from "react-router-dom";
import VideoProject from "../pages/project/video-project/VideoProject";
import HomePage from "../pages/HomePage";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<PortfolioTest />} />
      <Route path="/portfolio/portraiture" element={<Portraiture />} />
      <Route path="/portfolio/editorial" element={<Editorial />} />
      <Route path="/portfolio/commercial" element={<Commercial />} />
      <Route path="/portfolio/video" element={<VideoProject />} />
    </Routes>
  );
};

export default AnimRoutes;
