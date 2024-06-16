import React, { useContext } from "react";
// import images
import Tommy from "../img/about/Tommy.jpg";
//import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
      style={{ backgroundColor: "#F1F2F2" }}
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:pt-10 lg:order-none overflow-hidden">
            <img src={Tommy} alt="" />
          </div>

          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg: items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-xl">
              My name is <b>Ethan Thuan Le</b>
              <br />
              <br />
              I started photography since I was 15 when I was kicked out of the house...
              <br />
              <br />
              Actually that doesn't matter.
              <br />
              <br />
              What mattered is I can bring your vision to life. Whether it's an indie project, wedding or commercial, my team and I will deliver. 
              <br />
              <br />
              My life's been all about capturing beautiful images & memories, and I'm gonna make sure yours are no exception.
              <br />
              <br />
              I am going to create more memories until I'm 80s. So if you're looking to turn your fleeting moments into something tangible and last a lifetime, let me know.
            </p>
            <Link to={"/contact"} className="btn">
              Let's get your story told!
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
