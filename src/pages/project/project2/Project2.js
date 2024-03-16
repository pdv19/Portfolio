import React from "react";
import { Project2SourceImg } from "../../../components/LazyImage/data";

import PhotoSection from "../../../components/Project1/PhotoSection";
import ContainerWrapper from "../../../components/Project1/ContainerWrapper";
import ContactMeBtn from "../../../components/ContactMeBtn";


const PhotoCardListProject2 = [
  {
    src: Project2SourceImg.SHOT_2,
    textHeader: "🚀 PROJECT 1 💨",
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to optimize image loading ande for users. e  bandwidth, and create a more efficient and enjoyable user experience. Learn how to implement this performance-enhancing feature in your projects and unlock the full potential of optimized image loading.",
    button: <ContactMeBtn linkTo={'/contact'} />,
  },
  {
    src: Project2SourceImg.SHOT_1,
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project2SourceImg.SHOT_7,
    textContent:
      "optimize image loading and elevate performance. With Intersection Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project2SourceImg.SHOT_3,
    textContent:
      "Observer, images are fetched dynamically as they come into the viewport, Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project2SourceImg.SHOT_4,
    textContent:
      "eliminating the need to load all images upfront. This technique improves Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project2SourceImg.SHOT_5,
    textContent:
      "page load speed and reduces unnecessary network requests, resulting in a Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project2SourceImg.SHOT_6,
    textContent:
      "smoother browsing experience for users. Incorporate the power of Intersection Observer into your web projects to",
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
