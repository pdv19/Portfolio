import React from "react";
import { Project2SourceImg } from "../../components/LazyImage/data";
import { Project1SourceImg } from "../../components/LazyImage/data";

import PhotoSection from "../../components/Project1/PhotoSection";
import ContainerWrapper from "../../components/Project1/ContainerWrapper";
import ContactMeBtn from "../../components/ContactMeBtn";

const PhotoCardListProject2 = [
  {
    src: Project2SourceImg.SHOT_2,
    textHeader: "Editorial",
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to optimize image loading ande for users. e  bandwidth, and create a more efficient and enjoyable user experience. Learn how to implement this performance-enhancing feature in your projects and unlock the full potential of optimized image loading.",
    button: <ContactMeBtn linkTo={"/contact"} />,
    type : 'video'
  },
  {
    src: Project2SourceImg.SHOT_6,
    textContent: <p>Tomas - Lost in thought amidst a world of words</p>,
  },
  {
    src: Project2SourceImg.SHOT_7,
    textContent: (
      <>
        <p>It's his first time that Samuel been to the gym</p>
        <p>Behind was the records in pounds</p>
        <p>S for Squat</p>
        <p>B for Bench Press</p>
        <p>D for Deadlift</p>
      </>
    ),
  },
  {
    src: Project2SourceImg.SHOT_1,
    textContent: <p>Family... Building it...</p>,
  },
  {
    src: Project2SourceImg.SHOT_4,
    textContent: (
      <p>
        Lost in the tranquility of nature, she blends seamlessly while also
        captivating the eye.
      </p>
    ),
  },
  {
    src: Project2SourceImg.SHOT_5,
    textContent: (
      <p>
        Thanh and Joey's wedding day was particularly memorable, as the weather
        forecast, which predicted rain and clouds throughout the month,
        remarkably cleared up for their special occasion. The couple even
        expressed their delight by requesting to walk down the aisle amidst a
        sea of balloons not once, but twice and thrice.
      </p>
    ),
  },

  {
    src: Project1SourceImg.SHOT_7,
    textContent: (
      <p>Football isn’t just a game. It’s a stormproof passion for Jay.</p>
    ),
  },
  {
    src: Project2SourceImg.SHOT_2,
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to optimize image loading ande for users. e  bandwidth, and create a more efficient and enjoyable user experience. Learn how to implement this performance-enhancing feature in your projects and unlock the full potential of optimized image loading.",
    button: <ContactMeBtn linkTo={"/contact"} />,
  },
];

const Project2 = () => {
  return (
    <ContainerWrapper>
      <PhotoSection photoList={PhotoCardListProject2} />
    </ContainerWrapper>
  );
};

export default Project2;
