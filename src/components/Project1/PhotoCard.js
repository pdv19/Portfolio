import React, { useCallback, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { MobileViewContext } from "../../context/MobileViewContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PhotoCard = ({ id, itemProps }) => {
  const { src, secondSrc, textContent, textHeader, button, type } = itemProps;
  const { mobileViewportIsActive: isMobile, tabletViewportIsActive: isTablet } =
    useContext(MobileViewContext);

  const CardContainer = React.forwardRef((props, ref) => {
    const { children, id } = props;

    return (
      <div
        className="flex items-center justify-center snap-center w-[100%] flex-col"
        key={id}
        ref={ref}
      >
        {children}
      </div>
    );
  });

  const CardWrapper = ({ children, isMobile }) => (
    <div
      className={`h-[100%] ${
        secondSrc ? "w-[100%]" : "w-[100%]"
      } m-auto flex justify-center gap-[50px] ${
        isMobile ? "flex-col" : "flex-row"
      }`}
    >
      {children}
    </div>
  );

  const ImageWrapper = ({ children }) => (
    <div
      className={` bg-white p-[10px] rounded-lg ${
        isMobile || isTablet ? "h-[100%] w[100%]" : "h-[130%] w[130%]"
      }`}
    >
      {children}
    </div>
  );

  const ImagePart = ({ id, src, secondSrc, alt, photoType }) => {
    if (photoType === "video") {
      console.log("photoType", src, photoType);
      return (
        <div
          className={`flex gap-4 h-[100%] justify-center items-center inline-block align-middle object-cover ${
            isMobile ? "w-[100%]" : "w-[70%]"
          }`}
        >
          <div
            className={`flex justify-center gap-4 ${
              isMobile ? "h-[100%]" : "h-[70%]"
            } `}
          >
            <ImageWrapper>
              <video src={src} autoPlay loop muted />
            </ImageWrapper>
          </div>
        </div>
      );
    }
    //Add carousel for 2 photo section
    if ((isMobile || isTablet) && secondSrc) {
      return (
        <div
          className={`flex gap-4 basis-2/3 h-[100%] justify-center items-center inline-block align-middle object-cover ${
            isMobile ? "w-[100%]" : "w-[70%] "
          }`}
        >
          <div
            className={`flex justify-center gap-4 ${
              isMobile ? "h-[100%]" : "h-[70%]"
            } `}
          >
            <Carousel showThumbs={false} showStatus={false}>
              <ImageWrapper>
                <img className="h-[100%] w[100%]" src={src} alt={alt} />*{" "}
              </ImageWrapper>
              <ImageWrapper>
                <img className="h-[100%] w[100%]" src={secondSrc} alt={alt} />
              </ImageWrapper>
            </Carousel>
          </div>
        </div>
      );
    }

    if (!secondSrc) {
      return (
        <div
          className={`flex w-fit h-[100%] justify-center items-center inline-block align-middle object-cover`}
        >
          <div
            className={`flex justify-center gap-4 ${
              isMobile ? "h-[100%]" : "h-[70%]"
            } `}
          >
            <ImageWrapper>
              <img
                style={{ aspectRatio: "auto" }}
                className="h-[100%] w-[100%]"
                src={src}
                alt={alt}
              />
            </ImageWrapper>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`flex gap-4 h-[100%] justify-center items-center inline-block align-middle object-cover ${
          isMobile ? "w-[100%]" : "w-[70%]"
        }`}
      >
        <div
          className={`flex justify-center gap-4 ${
            isMobile ? "h-[100%]" : "h-[70%]"
          } `}
        >
          <ImageWrapper>
            <img className="h-[100%] w[100%]" src={src} alt={alt} />
          </ImageWrapper>
          <ImageWrapper>
            <img className="h-[100%] w[100%]" src={secondSrc} alt={alt} />
          </ImageWrapper>
        </div>
      </div>
    );
  };

  const DesciptionPart = ({ textContent, textHeader, button }) => {
    return (
      <motion.div
        className={`flex flex-col justify-center ${
          id % 2 ? "items-start" : "items-center"
        }  gap-2 ${isMobile ? "w-[100%]" : "w-[40%]"}`}
      >
        <div className="font-bold text-[32px]">{textHeader ?? textHeader}</div>
        <div className="text-[20px] w-fit ">{textContent ?? textContent}</div>
        <div>{button ?? button}</div>
      </motion.div>
    );
  };

  if (isMobile || (!isMobile && id % 2)) {
    return (
      <CardContainer id={id}>
        <CardWrapper isMobile={isMobile}>
          <ImagePart id={id} src={src} secondSrc={secondSrc} photoType={type} />
          <DesciptionPart
            textContent={textContent}
            textHeader={textHeader}
            button={button}
          />
        </CardWrapper>
      </CardContainer>
    );
  }

  return (
    <CardContainer id={id}>
      <CardWrapper>
        <DesciptionPart textContent={textContent} />
        <ImagePart
          src={src}
          secondSrc={secondSrc}
          textHeader={textHeader}
          photoType={type}
        />
      </CardWrapper>
    </CardContainer>
  );
};

export default PhotoCard;
