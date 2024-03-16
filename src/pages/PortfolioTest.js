import React, { useContext } from "react";
// import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
//import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import Card from "../components/Card";
import { Project1SourceImg } from '../components/LazyImage/data'

const Portfolio = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
     <div>
       <section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section text-center"
        style={{ backgroundColor: '#F1F2F2' }}
      >
        {/* <div className="container mx-auto h-full relative"> */}
          {/* <div className="flex flex-col lg:flex-row h-full items-center justify-center lg:justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"> */}
            <div style={{paddingTop: '10rem'}}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              className="flex flex-col lg:items-start mx-auto mt-auto"
            >
              <h1 className="h1 mx-auto mt-auto">Portfolio</h1>
              <p className="mb-12 max-w-sm  mx-auto mt-auto">
                My name is <b>Ethan Thuan Le</b>
                <br />
                <br />
                Project
              </p>
              <Link to={"/contact"} className="btn mb-[30px] mx-auto mx-auto mt-auto">
                Contact me
              </Link>
            </div>
          {/* </div> */}
        {/* </div> */}
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
          <Card title="Project 1" description="Project 1" link="/portfolio/project1" img={Project1SourceImg.SHOT_1} />
          <Card title="Project 2" description="Project 2" link="/portfolio/project2" img={Project1SourceImg.SHOT_3} />
          <Card title="Project 3" description="Project 3" link="/portfolio/project2" img={Project1SourceImg.SHOT_5} />
          <Card title="Project 4" description="Project 4" link="/portfolio/video" img={Project1SourceImg.SHOT_8} />
        </div>
      </section>
     </div>
    );
  };
  
  export default Portfolio;
  