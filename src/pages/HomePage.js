import React from "react";
import videoBg from "../pages/project/video-project/video/videoBg.mp4";

const HomePage = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="h1" style={{ color: "#B18845" }}>
          The Myths Studio
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
      </div>
    </div>
  );
};

export default HomePage;
