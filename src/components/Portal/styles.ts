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
  height: ${(props) => (props.open ? '100dvh' : 'auto')};
  width: ${(props) => (props.open ? '100vw' : 'auto')};

  position: absolute;
  bottom: 0;
  right: 0;

  @media ${mediaQueries.tablet} {
    padding: ${(props) => (props.open ? 0 : '2rem')};
  }

  @media ${mediaQueries.mediumScreens} {
    width: ${(props) => (props.open ? '50vw' : 'auto')};
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
