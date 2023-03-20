import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  aspect-ratio: 16/9;
  flex-shrink: 0;
  scroll-snap-align: start;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
  }

  > div {
    width: 100%;
    height: 35%;
    background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)) 0 40%;
    padding: 12px;
    position: absolute;
    bottom: 0;
  }

  &:hover {
    transform: scale(1.25);
    z-index: 9;
  }
`;
