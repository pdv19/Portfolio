import React from "react";
import { Project1SourceImg } from "../../components/LazyImage/data";

import PhotoSection from "../../components/Project1/PhotoSection";
import ContainerWrapper from "../../components/Project1/ContainerWrapper";
import ContactMeBtn from "../../components/ContactMeBtn";

const PhotoCardListProject1 = [
  {
    src: "https://images.unsplash.com/photo-1682685796186-1bb4a5655653",
    textHeader: "🚀 PROJECT 1 💨",
    textContent:
      "Incorporate the power of Intersection Observer into your web projects to optimize image loading ande for users. e  bandwidth, and create a more efficient and enjoyable user experience. Learn how to implement this performance-enhancing feature in your projects and unlock the full potential of optimized image loading.",
    button: <ContactMeBtn linkTo={"/contact"} />,
  },
  {
    src: Project1SourceImg.SHOT_3,
    secondSrc: Project1SourceImg.SHOT_4,
    textContent: (
      <>
        <p style={{ fontStyle: "italic", marginBottom: "2px" }}>
          "The camera is just a tool used to reflect what the photographer sees
          in that moment."
        </p>
        <p>
          I wasn't even the one behind the lens, but I set the scene and
          lighting and asked Nhi's fiance, Phong, to capture his raw feelings
          for her. He sees her as a beacon of pureness and guidance, a soul mate
          who always has his back. His love for her translates to the amazing
          photos he took. It was the first time Phong used a camera ever. But he
          was the real photographer in this one. I'm the DOP - Director of
          Photography and the one who witnessed their love story unfold, their
          friend cheering them on from the sidelines.
        </p>
      </>
    ),
  },

  {
    src: Project1SourceImg.SHOT_1,
    textContent: (
      <p>
        To capture epic portrait shots, we gotta go back to the fundamentals, to
        the wicked Black & White photos from back in the day when photography
        was first invented. The lighting and contrast are the real storytellers.
        In this case, the light and shadow contrast was used to create this
        gnarly moody contrast that totally captured Won's edgy vibes with his
        new tattoo. The set was literally in his mediocre garage.
      </p>
    ),
  },
  {
    src: Project1SourceImg.SHOT_2,
    textContent: (
      <>
        <p>
          Aidan desired to capture his facial expressions for his modeling
          portfolio. Lighting and contrast were ultilized effectively to achieve
          this studio-like aesthetic. The set was at a boba shop
        </p>
      </>
    ),
  },
  {
    src: Project1SourceImg.SHOT_5,
    textContent: (
      <p>
        My friend Vy is exceptionally talented in posing for photographs. While
        we were touring a dinosaur museum in Savannah, we stumbled upon a large
        mirror. Vy was standing in front of it, adjusting her hair. I simply
        asked her to maintain her pose and take two steps forward. 📸 📸
      </p>
    ),
  },
  {
    src: Project1SourceImg.SHOT_8,
    secondSrc: Project1SourceImg.SHOT_6,
    textContent: (
      <p>
        Portraiture is an art of capturing a subject in their authentic element.
        For a positive person, I'd aim for their brightest smile. For a
        business-minded individual, I'd have them pose with chin up, eyes gazing
        towards the horizon, symbolizing their bright future. A picture says a
        thousand words, I'll make sure to deliver the right message.
      </p>
    ),
  },
  // {
  //   src: Project1SourceImg.SHOT_6,
  //   textContent:
  //     "eliminating the need to load all images upfront. This technique improves Incorporate the power of Intersection Observer into your web projects to",
  // },
];

const Project1 = () => {
  return (
    <ContainerWrapper>
      <PhotoSection photoList={PhotoCardListProject1} />
    </ContainerWrapper>
  );
};

export default Project1;
