import React, { useRef, useEffect, useState } from "react";
import "./LazyImage.css";

const LazyImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(imageRef.current);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-300px"
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && imageRef.current) {
      const dataSrc = imageRef.current.getAttribute("data-src");
      if (dataSrc) {
        imageRef.current.src = dataSrc;
      }
    }
  }, [isIntersecting]);

  return (
    <img
      data-test-id="component-image"
      className="lazy-image"
      ref={imageRef}
      src={src + `?w=10`}
      alt={alt}
      data-src={src + `?w=1800`}
    />
  );
};

export default LazyImage;
