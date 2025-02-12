import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.green500};
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.colors.gray800};
    color: ${(props) => props.theme.colors.gray100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  textarea,
  button,
  select {
    font-family: ${(props) => props.theme.fonts.sans};
    font-size: 1rem;
    font-weight: 350;
    line-height: 1.6;
  }

  b,
  strong,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  th {
    font-weight: 600;
  }

  button {
    border: none;
    background-color: transparent;
    line-height: 0;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    &:hover {
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }

  ul, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input {
    border: none;
  }
`;
