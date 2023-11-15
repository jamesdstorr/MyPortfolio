import React, { useState, useEffect, RefObject } from "react";

interface VerticalScrollIndicatorProps {
  targetRef: RefObject<HTMLDivElement>;
}

const VerticalScrollIndicator: React.FC<VerticalScrollIndicatorProps> = ({
  targetRef,
}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(10);

  const onScroll = () => {
    const element = targetRef.current;
    if (element) {
      const totalScroll = element.scrollHeight - element.clientHeight;
      const currentScroll = element.scrollTop;

      const scrollPercentage = (currentScroll / totalScroll) * 90;
      const offsetPercentage = 10;
      setScrollPosition(scrollPercentage + offsetPercentage);
    }
  };

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      target.addEventListener("scroll", onScroll);

      return () => {
        target.removeEventListener("scroll", onScroll);
      };
    }
  }, [targetRef]);

  const indicatorStyle: React.CSSProperties = {
    position: "absolute",
    top: `${scrollPosition}%`,
    transform: "translateY(-50%)",
    right: "0px",
    height: "20px",
    width: "5px",
    backgroundColor: "black",
    zIndex: "10",
  };

  const scrollbarBackgroundStyle: React.CSSProperties = {
    position: "absolute",
    top: "10%",
    right: "0px",
    height: "90%",
    width: "5px",
    backgroundColor: "lightgrey",
  };

  return (
    <>
      <div style={indicatorStyle} />
      <div style={scrollbarBackgroundStyle} />
    </>
  );
};

export default VerticalScrollIndicator;
