import React, { useState, useEffect, RefObject } from "react";

interface VerticalScrollIndicatorProps {
  targetRef: RefObject<HTMLDivElement>;
}

const VerticalScrollIndicator: React.FC<VerticalScrollIndicatorProps> = ({
  targetRef,
}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(10);

  const onLoad = () => {
    console.log(targetRef.current);
    console.log("content changed");
    setScrollPosition(10);
  };

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

    const mutationCallback = (
      mutationsList: any,
      observer: MutationObserver
    ) => {
      for (const mutation of mutationsList) {
        onLoad();
      }
    };

    // Creating an observer
    const observer = new MutationObserver(mutationCallback);

    if (target) {
      observer.observe(target, { childList: true, subtree: true });
      target.addEventListener("scroll", onScroll);

      return () => {
        target.removeEventListener("scroll", onScroll);
        observer.disconnect();
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
    borderRadius: "5px",
  };

  const scrollbarBackgroundStyle: React.CSSProperties = {
    position: "absolute",
    top: "8%",
    right: "0px",
    height: "94%",
    width: "5px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
  };

  return (
    <>
      <div style={indicatorStyle} />
      <div style={scrollbarBackgroundStyle} />
    </>
  );
};

export default VerticalScrollIndicator;
