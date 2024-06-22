import React from "react";
import { Project3SourceImg } from "../../components/LazyImage/data";

import PhotoSection from "../../components/Project1/PhotoSection";
import ContainerWrapper from "../../components/Project1/ContainerWrapper";
import ContactMeBtn from "../../components/ContactMeBtn";

const PhotoCardListProject3 = [
  {
    src: Project3SourceImg.SHOT_1,
    textHeader: "Commercial",
    textContent:
      "Short form vertical videos are taking over. Even skincare ads are getting in on the action.",
    button: <ContactMeBtn linkTo={"/contact"} />,
    type: "video",
  },
  {
    src: Project3SourceImg.SHOT_2,
    textContent: (
      <p>
        Short form vertical videos are taking over. Even skincare ads are getting in on the action.
      </p>
    ),
  },
  {
    src: Project3SourceImg.SHOT_3,
    secondSrc: Project3SourceImg.SHOT_4,
    textContent: (
      <p>
        Savory, sweet, sour, spicy, No, it's actually more complicated than
        that. Vietnamese cuisine is renowned for its delectable dishes that
        feature generous portions of fresh herbs and offer an abundance of rich
        and enticing flavors.
      </p>
    ),
  },
  {
    src: Project3SourceImg.SHOT_5,
    textContent: (
      <>
        <p>Atlanta Tech Village - Buckhead</p>
        <p>A coworking space with a decked-out gym</p>
      </>
    ),
  },
  {
    src: Project3SourceImg.SHOT_6,
    type: "video",
    textContent: (
      <p>
        Trending Club. Urban outfits with timeless vibes.
      </p>
    ),
  },
];

const Project3 = () => {
  return (
    <ContainerWrapper>
      <PhotoSection photoList={PhotoCardListProject3} />
    </ContainerWrapper>

  );
};

export default Project3;
