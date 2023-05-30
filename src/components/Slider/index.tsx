import { SliderContext } from '../../contexts/SliderContext';
import useSizeElement from '../../hooks/useSizeElement';
import useSliding from '../../hooks/useSliding';
import { MovieType } from '../../types/Movie';
import { Card } from '../Card';
import { SliderButton } from './SliderButton';
import { Box, Container, Wrapper } from './styles';

interface SliderProps {
  movies: MovieType[];
}

export function Slider({ movies }: SliderProps) {
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding({ elementWidth: width, countElements: movies.length });


  const contextValue = {
    elementRef,
  };

  return (
    <SliderContext.Provider
      value={contextValue}
    >
      <Wrapper
      >

        {hasPrev && (
          <SliderButton
            type='prev'
            onClick={handlePrev}
          />
        )}

        {hasNext && (
          <SliderButton
            type='next'
            onClick={handleNext}
          />
        )}
        <Container
        >
          <Box
            ref={containerRef}
            {...slideProps}
          >
            {movies.map((movie: MovieType) => (
              <Card
                key={movie.id}
                link={`/movie/${movie.id}`}
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                title={movie.title}
                ref={elementRef}
              />
            ))}
          </Box>
        </Container>


      </Wrapper>
    </SliderContext.Provider>
  );
}


// import React, { useState } from 'react';
// import cx from 'classnames';
// import SliderContext from './context'
// import Content from './Content'
// import SlideButton from './SlideButton'
// import SliderWrapper from './SliderWrapper'
// import useSliding from './useSliding'
// import useSizeElement from './useSizeElement'
// import './Slider.scss'

// const Slider = ({ children, activeSlide }) => {
//   const [currentSlide, setCurrentSlide] = useState(activeSlide);
//   const { width, elementRef } = useSizeElement();
//   const {
//     handlePrev,
//     handleNext,
//     slideProps,
//     containerRef,
//     hasNext,
//     hasPrev
//   } = useSliding(width, React.Children.count(children));

//   const handleSelect = movie => {
//     setCurrentSlide(movie);
//   };

//   const handleClose = () => {
//     setCurrentSlide(null);
//   };

//   const contextValue = {
//     onSelectSlide: handleSelect,
//     onCloseSlide: handleClose,
//     elementRef,
//     currentSlide,
//   };

//   return (
//     <SliderContext.Provider value={contextValue}>
//       <SliderWrapper>
//         <div
//           className={cx('slider', { 'slider--open': currentSlide != null })}
//         >
//           <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
//         </div>
//         {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
//         {hasNext && <SlideButton onClick={handleNext} type="next" />}
//       </SliderWrapper>
//       {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
//     </SliderContext.Provider>
//   );
// };

// export default Slider;
