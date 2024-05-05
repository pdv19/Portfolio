import React from "react";
import PhotoCard from "./PhotoCard";
import { motion, useScroll, useSpring } from "framer-motion";

const PhotoSection = ({ photoList }) => {
  return (
    <div className={`flex flex-col gap-8 mx-auto px-[12%] relative`}>
      <div className="h-40"></div>
      {/* <motion.div
        className="sticky top-40 bottom-0 pt-[10px] rounded-lg h-5"
        style={{ scaleX, backgroundColor: "#B18845" }}
      ></motion.div> */}
      {photoList.map((item, index) => (
        <PhotoCard key={index} id={index + 1} itemProps={item} />
      ))}
      <div className="h-10"></div>
    </div>
  );
};

export default PhotoSection;
