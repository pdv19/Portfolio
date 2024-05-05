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
      "Incorporate the power of Intersection Observer into your web projects to optimize image loading ande for users. e  bandwidth, and create a more efficient and enjoyable user experience. Learn how to implement this performance-enhancing feature in your projects and unlock the full potential of optimized image loading.",
    button: <ContactMeBtn linkTo={"/contact"} />,
    type: "video",
  },
  {
    src: Project3SourceImg.SHOT_2,
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
    src: Project3SourceImg.SHOT_3,
    secondSrc: Project3SourceImg.SHOT_4,
    textContent: (
      <p>
        Atlanta Tech Village - Buckhead A coworking space with a decked-out gym
      </p>
    ),
  },
  {
    src: Project3SourceImg.SHOT_5,
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
    src: Project3SourceImg.SHOT_6,
    type: "video",
    textContent: (
      <p>
        Lost in the tranquility of nature, she blends seamlessly while also
        captivating the eye.
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
