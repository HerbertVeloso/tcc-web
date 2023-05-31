import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #f5f6fa;
    --black: #353b48;
    --primary: #8c7ae6;
    --secondary: #0097e6;

    --title: #9c88ff;
    --text: #dcdde1;

    --shape: #1f2729;
    --background: #2f3640;
    --border: #29292e;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Roboto", sans-serif;
    color: var(--text);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 900;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
