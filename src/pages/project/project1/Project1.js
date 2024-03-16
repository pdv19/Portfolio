import React from "react";
import { Project1SourceImg } from "../../../components/LazyImage/data";

import PhotoSection from "../../../components/Project1/PhotoSection";
import ContainerWrapper from "../../../components/Project1/ContainerWrapper";
import ContactMeBtn from "../../../components/ContactMeBtn";


const PhotoCardListProject1 = [
  {
    src: "https://images.unsplash.com/photo-1682685796186-1bb4a5655653",
    textHeader: "🚀 PROJECT 1 💨",
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to optimize image loading ande for users. e  bandwidth, and create a more efficient and enjoyable user experience. Learn how to implement this performance-enhancing feature in your projects and unlock the full potential of optimized image loading.",
    button: <ContactMeBtn linkTo={'/contact'} />,
  },
  {
    src: Project1SourceImg.SHOT_1,
    secondSrc: Project1SourceImg.SHOT_2,
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project1SourceImg.SHOT_3,
    secondSrc: Project1SourceImg.SHOT_4,
    textContent:
      "optimize image loading and elevate performance. With Intersection Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project1SourceImg.SHOT_5,
    textContent:
      "Observer, images are fetched dynamically as they come into the viewport, Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project1SourceImg.SHOT_6,
    textContent:
      "eliminating the need to load all images upfront. This technique improves Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project1SourceImg.SHOT_7,
    textContent:
      "page load speed and reduces unnecessary network requests, resulting in a Incorporate the power of Intersection Observer into your web projects to",
  },
  {
    src: Project1SourceImg.SHOT_8,
    textContent:
      "smoother browsing experience for users. Incorporate the power of Intersection Observer into your web projects to",
  },
];

const Project1 = () => {
  return (
    <ContainerWrapper>
      <PhotoSection photoList={PhotoCardListProject1} />
    </ContainerWrapper>
  );
};

export default Project1;
