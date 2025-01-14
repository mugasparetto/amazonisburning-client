import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { mediaQueries } from '../../constants/mediaQueries';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: ${(props) => (props.open ? 'auto' : 'pointer')};
  background: ${colors.neutral.white};
  padding: ${(props) => (props.open ? 0 : '1rem')};
  height: ${(props) => (props.open ? '100dvh' : '4rem')};
  width: ${(props) => (props.open ? '100vw' : '18.5rem')};
  transition: height 0.3s ease, width 0.3s ease, padding 0.3s ease;

  position: absolute;
  bottom: 0;
  right: 0;

  @media ${mediaQueries.tablet} {
    padding: ${(props) => (props.open ? 0 : '2rem')};
    height: ${(props) => (props.open ? '100dvh' : '6rem')};
    width: ${(props) => (props.open ? '100vw' : '23.25rem')};
  }

  @media ${mediaQueries.mediumScreens} {
    width: ${(props) => (props.open ? '50vw' : '23.25rem')};
  }

  @media ${mediaQueries.largeScreensAndAbove} {
    padding: ${(props) => (props.open ? 0 : '2.5rem')};
  }

  span {
    font-size: 1rem;
  }

  span:not(.marker-cluster div span, .leaflet-control-zoom a span) {
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.09rem;
    text-transform: uppercase;

    @media ${mediaQueries.largeScreensAndAbove} {
      font-size: 1.5rem;
    }
  }
`;

export const CTA = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 1rem;

    @media ${mediaQueries.tablet} {
      font-size: 1.25rem;
    }

    @media ${mediaQueries.largeScreensAndAbove} {
      font-size: 1.5rem;
    }
  }

  img {
    margin-left: 1.25rem;

    @media ${mediaQueries.largeScreensAndAbove} {
      margin-left: 2rem;
    }
  }
`;
