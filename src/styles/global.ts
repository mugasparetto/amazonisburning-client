import { createGlobalStyle } from 'styled-components';

import Bold from '../assets/PPNeueMontrealBold.otf';
import Medium from '../assets/PPNeueMontrealMedium.otf';
import Book from '../assets/PPNeueMontrealBook.otf';
import { colors } from '../constants/colors';

export default createGlobalStyle`
 @font-face {
    font-family: Neue Montreal;
    src: url(${Book}) format("opentype");
}

@font-face {
    font-family: Neue Montreal;
    font-weight: bold;
    src: url(${Bold}) format("opentype");
}

@font-face {
    font-family: Neue Montreal;
    font-weight: 500;
    src: url(${Medium}) format("opentype");
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button {
    font-family: Neue Montreal, sans-serif;
    font-size: 16px;
    color: ${colors.neutral.darkest};
    --webkit-font-smothing: atialiased;
  }

  h1 {
    font-weight: bold;
    font-size: 20rem;
    margin: -3rem 0;
  }

  h2 {
    font-weight: 500;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.18rem;
  }

  h3 {
    font-weight: 500;
    font-size: 2.5rem;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a:link, a:visited, a:focus, a:hover, a:active {
    color: ${colors.neutral.darkest};
}
`;
