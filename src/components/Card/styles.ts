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
  display: block;

  img {
    width: 100%;
  }

 div {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
    padding: 12px;
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

  }

  &:hover {
    transform: scale(1.25);
    z-index: 9;
  }
`;
