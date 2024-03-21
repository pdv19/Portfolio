import React from "react";
import videoBg from "../pages/project/video-project/video/videoBg.mp4";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const HomePage = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <motion.div
        className="content"
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
      >
        <h1 className="h1" style={{ color: "#B18845" }}>
          The Myth Visuals
        </h1>
        <div>
          <p
            className="mx-auto my-auto text-center text-[26px] lg:text-[36px] font-primary"
            style={{ color: "#B18845" }}
          >
            Photographer & Filmmaker
            <br />
            Atlanta GA, USA
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
