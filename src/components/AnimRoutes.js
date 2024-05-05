import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import PortfolioTest from "../pages/PortfolioTest";
import Project1 from "../pages/project/Project1";
import Project2 from "../pages/project/Project2";
import Project3 from "../pages/project/Project3";
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
      <Route path="/portfolio/project1" element={<Project1 />} />
      <Route path="/portfolio/project2" element={<Project2 />} />
      <Route path="/portfolio/project3" element={<Project3 />} />
      <Route path="/portfolio/video" element={<VideoProject />} />
    </Routes>
  );
};

export default AnimRoutes;
