import { createGlobalStyle } from 'styled-components';

import Bold from '../assets/PPNeueMontrealBold.otf';
import Medium from '../assets/PPNeueMontrealMedium.otf';
import Book from '../assets/PPNeueMontrealBook.otf';
import { colors } from '../constants/colors';
import { mediaQueries } from '../constants/mediaQueries';

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

  body {
    overflow: hidden;
  }

  h1 {
    font-weight: bold;
    font-size: 14rem;
    margin: -2rem 0;

    @media ${mediaQueries.largeScreensAndAbove} {
      font-size: 20rem;
      margin: -3rem 0;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.18rem;
    margin-bottom: 1.75rem;

    @media ${mediaQueries.largeScreensAndAbove} {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1.75rem;

    @media ${mediaQueries.largeScreensAndAbove} {
      font-size: 2.5rem;
    }
  }

  h4 {
    margin: 1.5rem 0 1rem;
    font-weight: 500;
    font-size: 2rem;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a:link, a:visited, a:focus, a:hover, a:active {
    color: ${colors.neutral.darkest};
  }

  p, ol li {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem; 

    @media ${mediaQueries.largeScreensAndAbove} {
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      line-height: 1.75rem; 
    }
  }

  ol {
    padding-left: 1.5rem;
  }

  h4 + p {
    margin-top: 0.5rem;
  }
`;
