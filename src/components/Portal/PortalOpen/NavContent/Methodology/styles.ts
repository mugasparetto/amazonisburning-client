import styled from 'styled-components';
import { mediaQueries } from '../../../../../constants/mediaQueries';

export const Link = styled.em`
  text-decoration: underline;
  font-size: 1rem;
  font-style: normal;
  cursor: pointer;

  @media ${mediaQueries.largeScreensAndAbove} {
    font-size: 1.25rem;
  }
`;
