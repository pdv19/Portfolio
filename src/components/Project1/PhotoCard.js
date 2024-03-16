import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LazyImage from "../LazyImage/LazyImage";
import { MobileViewContext } from "../../context/MobileViewContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PhotoCard = ({ id, itemProps }) => {
  const { src, secondSrc, textContent, textHeader, button } = itemProps;
  const { mobileViewportIsActive: isMobile, tabletViewportIsActive: isTablet } =
    useContext(MobileViewContext);
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  });
  const y_TextTransform = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const CardContainer = React.forwardRef((props, ref) => {
    const { children, id, scrollYProgress } = props;

    return (
      <section
        className="flex items-center justify-center snap-center w-[100%] flex-col"
        style={{
          height: "calc(100vh - 10rem - 50px)",
          maxHeight: "calc(100vh - 10rem - 50px)",
        }}
        key={id}
        ref={ref}
      >
        {children}
      </section>
    );
  });

  const CardWrapper = ({ children, isMobile }) => (
    <div
      className={`h-[100%] m-auto flex gap-[50px] ${isMobile ? "flex-col" : "flex-row"
        }`}
    >
      {children}
    </div>
  );

  const ImageWrapper = ({ children }) => (
    <div className={` bg-white p-[10px] rounded-lg ${(isMobile || isTablet) ? 'h-[100%] w[100%]' : 'h-[130%] w[130%]'}`}>
      {children}
    </div>
  );

  const ImagePart = ({ id, src, secondSrc }) => {
    //Add carousel for 2 photo section
    if ((isMobile || isTablet) && secondSrc) {
      return (
        <div
          className={`flex gap-4 basis-2/3 h-[100%] justify-center items-center inline-block align-middle object-cover ${isMobile ? "w-[100%]" : "w-[70%]"
            }`}
        >
          <div
            className={`flex justify-center gap-4 ${isMobile ? "h-[100%]" : "h-[70%]"
              } `}
          >
            <Carousel showThumbs={false} showStatus={false}>
              <ImageWrapper>
                <img className="h-[100%] w[100%]" src={src} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="h-[100%] w[100%]" src={secondSrc} />
              </ImageWrapper>
            </Carousel>
          </div>
        </div>
      );
    }

    if (!secondSrc) {
      return (
        <div
          className={`flex h-[100%] justify-center items-center inline-block align-middle object-cover  ${isMobile ? "w-[100%]" : "w-[70%]"
            }`}
          style={!(isMobile || isTablet) ? id % 2 ? { marginRight: '5%' } : { marginLeft: '5%' } : null}
        >
          <div
            className={`flex justify-center gap-4 ${isMobile ? "h-[100%]" : "h-[70%]"
              } `}
          >
            <ImageWrapper>
              <img className="h-[100%] [100%]" src={src} />
            </ImageWrapper>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`flex gap-4 h-[100%] justify-center items-center inline-block align-middle object-cover ${isMobile ? "w-[100%]" : "w-[70%]"
          }`}
      >
        <div
          className={`flex justify-center gap-4 ${isMobile ? "h-[100%]" : "h-[70%]"
            } `}
        >
          <ImageWrapper>
            <img className="h-[100%] w[100%]" src={src} />
          </ImageWrapper>
          <ImageWrapper>
            <img className="h-[100%] w[100%]" src={secondSrc} />
          </ImageWrapper>
        </div>
      </div>
    );
  };

  const DesciptionPart = ({
    textContent,
    textHeader,
    button,
    y_TextTransform,
  }) => {
    return (
      <motion.div
        className={`flex flex-col justify-center align-middle gap-2 ${isMobile ? "w-[100%]" : "w-[40%]"
          }`}
        style={y_TextTransform}
      >
        <div className="font-bold text-[32px]">{textHeader ?? textHeader}</div>
        <div>{textContent ?? textContent}</div>
        <div>{button ?? button}</div>
      </motion.div>
    );
  };

  if (isMobile || (!isMobile && id % 2)) {
    return (
      <CardContainer id={id} ref={cardRef} scrollYProgress={scrollYProgress}>
        <CardWrapper isMobile={isMobile}>
          <ImagePart id={id} src={src} secondSrc={secondSrc} />
          <DesciptionPart
            textContent={textContent}
            textHeader={textHeader}
            button={button}
            y_TextTransform={y_TextTransform}
          />
        </CardWrapper>
      </CardContainer>
    );
  }

  return (
    <CardContainer id={id} ref={cardRef} scrollYProgress={scrollYProgress}>
      <CardWrapper>
        <DesciptionPart textContent={textContent} />
        <ImagePart src={src} secondSrc={secondSrc} textHeader={textHeader} />
      </CardWrapper>
    </CardContainer>
  );
};

export default PhotoCard;
