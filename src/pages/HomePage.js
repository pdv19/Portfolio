import React from "react";
import videoBgDesktop from "../pages/project/video-project/video/videoBg.mp4";
import videoBgMobile from "../pages/project/video-project/video/MythMainPageVertical.mp4";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import moment from "moment";
import { Link } from "react-router-dom";
import ContactMeBtn from "../components/ContactMeBtn";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const currentMonth = moment().format("MMMM");
  const text = `Book The Myth Visuals in ${currentMonth} for a 20% discount`;
  const upperText = text.toUpperCase();

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={matches ? videoBgDesktop : videoBgMobile} autoPlay loop muted />
      <motion.div
        className="content"
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
      >
        {/* <h1 className="h1" style={{ color: "#B18845" }}>
          The Myth Visuals
        </h1> */}
        <div className="absolute bottom-0.5 w-full flex flex-col items-center">
          <p
            className="mx-auto my-auto text-center text-[26px] lg:text-[36px] font-extrabold"
            style={{ color: "#B18845" }}
          >
            {upperText}
            {/* Book The Myth Visuals in {currentMonth} for a 20% discount */}
            {/* <br />
            Photographer & Filmmaker
            <br />
            Atlanta GA, USA */}
          </p>
          <ContactMeBtn linkTo={"/contact"} />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
