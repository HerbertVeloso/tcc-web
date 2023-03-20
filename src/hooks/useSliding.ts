import { useEffect, useRef, useState } from 'react';

const PADDINGS = 64;

interface useSlidingProps {
  elementWidth: number;
  countElements: number;
}

const useSliding = ({ elementWidth, countElements }: useSlidingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    if (containerRef.current !== null) {
      const containerWidth = containerRef.current.clientWidth - PADDINGS;

      setContainerWidth(containerWidth);
      setTotalInViewport(Math.floor(containerWidth / elementWidth));
    }
  }, [containerRef.current]);

  const handlePrev = () => {
    // setViewed(viewed - totalInViewport);
    // setDistance(distance + containerWidth);
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const handleNext = () => {
    // setViewed(viewed + totalInViewport);
    // setDistance(distance - containerWidth);
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` }
  };

  const hasNext = distance < 0;
  const hasPrev = (viewed + totalInViewport) < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
