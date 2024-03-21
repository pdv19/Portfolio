import React from "react";
import ReactPlayer from "react-player";
import introVideo from "./video/Intro.mp4";
import introVideo2 from "./video/videoBg.mp4";
import introVideo3 from "./video/videoBg.mp4";
import introVideo4 from "./video/videoBg.mp4";
import "./video.css";
import ContactMeBtn from "../../../components/ContactMeBtn";

const VideoProject = () => {
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
            <div className="flex flex-col items-start justify-center">
              <p className="font-normal text-base">
                PRESENTED BY <strong>The Myth Visuals</strong>
              </p>
              <strong className="font-bold text-2xl text-[#B18845]">
                Averi + Josh Gallery
              </strong>
              <p className="font-bold text-xs md:text-xs lg:text-base xl:text-base">
                July 8th, 2023 | Saint Mary's Cathedral + Big Buck | Gaylord, MI
              </p>
              <strong className="font-bold text-sm">
                Cinematography by Ethan Thuan Le
              </strong>
              <ContactMeBtn linkTo={"/contact"} />
            </div>

            <div className="px-2 py-2">
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url={introVideo}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <p className="text-center font-medium text-2xl p-2.5">
                Highlight Film
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center py-7">
            <div className="px-2 py-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url={introVideo2}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <p className="text-center font-medium text-2xl p-2.5">
                Visit with Grandpa
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 py-2">
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url={introVideo3}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <p className="text-center font-medium text-2xl p-2.5">Toasts</p>
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="wrapper">
              <ReactPlayer
                className="player"
                url={introVideo4}
                width="100%"
                height="100%"
                controls
              />
            </div>
            <p className="text-center font-medium text-2xl p-2.5">
              Ceremony Film
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoProject;
