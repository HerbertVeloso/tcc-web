import { useEffect, useRef, useState } from 'react';

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current !== null) {
      setWidth(elementRef.current.clientWidth);
    }
  }, [elementRef.current]);

  return { width, elementRef };
};

export default useSizeElement;
