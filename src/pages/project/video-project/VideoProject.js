import React from "react";
import ReactPlayer from "react-player";
import introVideo from "./video/Intro.mp4";
import "./video.css";
import ContactMeBtn from "../../../components/ContactMeBtn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const VideoProject = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const textPCUpper =
    "From Commercial - Wedding - Music Video - Documentary - Indie Projects";
  const textPCUnder =
    "There's a special touch that I can add to make your visuals look stunning";

  const textMobileUpper =
    "Commercial - Wedding - Music Video - Documentary - Indie Projects";

  return (
    <div>
      <section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        // transition={transition1}
        className="section text-center"
        style={{ backgroundColor: "#F1F2F2", height: "100%" }}
      >
        <div
          style={{ paddingTop: "10rem" }}
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          //   transition={transition1}
          className="flex flex-col lg:items-start mx-auto mt-auto"
        >
          <h1 className="h1 mx-auto mt-auto">Highlight</h1>
        </div>

        <div className="px-2 py-2 2xl:px-80 xl:px-80 lg:px-20 md:px-20 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-4">
            <div
              className={`flex flex-col ${
                matches ? "items-start" : "justify-center"
              }`}
            >
              <p className="font-normal text-base">
                PRESENTED BY <strong>The Myth Visuals</strong>
              </p>
              <p className="font-bold text-xs md:text-xs lg:text-base xl:text-base">
                {matches ? textPCUpper : textMobileUpper}
              </p>
              <strong className="font-bold text-xs md:text-xs lg:text-base xl:text-base">
                {matches ? textPCUnder : ""}
              </strong>
                <div className={`flex ${!matches && "justify-center"}`}>
                  <ContactMeBtn
                    linkTo={"/contact"}
                    btnName="Book a call with me"
                  />
                </div>
            </div>

            <div className="px-2 py-2">
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url={introVideo}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  playsInline
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center py-7">
            <div className="px-2 py-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url="https://www.youtube.com/watch?v=4wz95dQEB7k"
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <p className="text-center font-medium text-2xl p-2.5">
                Kendra & Jeremy intimate wedding at downtown Atlanta
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 py-2">
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url="https://www.youtube.com/watch?v=GFwfwquxd7o"
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <p className="text-center font-medium text-2xl p-2.5">
                Alina & John family & close friend barn wedding
              </p>
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="wrapper">
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=6cSO3PpnPlE"
                width="100%"
                height="100%"
                controls
              />
            </div>
            <p className="text-center font-medium text-2xl p-2.5">
              Special Music Video Project with Evan Castle. He doesn't know
              what's real & what isn't
            </p>
            <div className="flex justify-center">
              <ContactMeBtn linkTo={"/contact"} btnName="Book a call with me" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoProject;
