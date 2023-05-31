import { SliderContext } from '../../contexts/SliderContext';
import useSizeElement from '../../hooks/useSizeElement';
import useSliding from '../../hooks/useSliding';
import { Card } from '../Card';
import { SliderButton } from './SliderButton';
import { Box, Container, Wrapper } from './styles';

export function Slider({ movies }) {
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding({ elementWidth: width, countElements: movies?.length });

  const contextValue = {
    elementRef,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <Wrapper>

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
        <Container>
          <Box
            ref={containerRef}
            {...slideProps}
          >
            {movies?.map((movie) => (
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
