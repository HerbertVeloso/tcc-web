import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 980px;
  margin:64px auto;

  h1 {
    margin-top: 16px;
    font-size: 2.5rem;
    color: var(--primary);
  }
  p {
    margin-top: 8px;
    font-size: 1.15rem;
  }
`;

export const MainVideo = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
`;

export const Container = styled.div`
  margin-top: 32px;

  h2 {
    color: var(--primary);
  }

  > div {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
    gap: 16px;
  }

  iframe {
    width: 100%;
    max-width: 480px;
    aspect-ratio: 16/9;
    border: none;
  }
`;
