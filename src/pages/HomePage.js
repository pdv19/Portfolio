import React from "react";
import videoBgDesktop from "../pages/project/video-project/video/videoBg.mp4";
import videoBgMobile from "../pages/project/video-project/video/MythMainPageVertical.mp4";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import moment from "moment";
import ContactMeBtn from "../components/ContactMeBtn";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const currentMonth = moment().format("MMMM");
  const currentYear = moment().year();
  const text = `Book The Myth Visuals in ${currentMonth} ${currentYear} for a 20% discount`;
  const upperText = text.toUpperCase();

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={matches ? videoBgDesktop : videoBgMobile} autoPlay loop muted playsInline />
      <motion.div
        className="content"
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
      >
        <div className="absolute bottom-0.5 w-full flex flex-col items-center">
          <p
            className="mx-auto my-auto text-center text-[26px] lg:text-[36px] font-extrabold"
            style={{ color: "#B18845" }}
          >
            {upperText}
          </p>
          <ContactMeBtn linkTo={"/contact"} btnName="Get A Quote Now" />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
