import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { mediaQueries } from '../../constants/mediaQueries';

export const Container = styled.div`
  display: flex;
  font-size: 1.125rem;
  letter-spacing: 0.09rem;

  @media ${mediaQueries.smallScreens} {
    font-size: 1.25rem;
  }

  @media ${mediaQueries.largeScreensAndAbove} {
    font-size: 1.5rem;
  }
`;

export const TimeModule = styled.div`
  color: ${colors.neutral.white};

  > span:first-child {
    font-weight: bold;
    margin-right: 0.25rem;
    width: 2rem;
  }

  > span:last-child {
    text-transform: uppercase;
    margin-right: 0.75rem;
    opacity: 0.8;
  }
`;
