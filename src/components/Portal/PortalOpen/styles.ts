import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { mediaQueries } from '../../../constants/mediaQueries';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

interface NavigationProps {
  open: boolean;
}

export const Navigation = styled.nav<NavigationProps>`
  position: absolute;
  height: 100dvh;
  width: 100%;
  z-index: 10000;
  background: ${colors.neutral.white};
  left: ${(props) => (props.open ? '0' : '-100%')};

  transition: left 0.4s ease-in-out;

  @media ${mediaQueries.tablet} {
    position: initial;
    height: initial;
    width: initial;

    padding: 1.5rem;
    border-right: solid 2px black;

    transition: initial;
  }

  @media ${mediaQueries.largeScreensAndAbove} {
    padding: 2.5rem;
  }

  ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${mediaQueries.tablet} {
      justify-content: space-around;

      li:nth-child(1) {
        flex-basis: 7%;
      }
      li:nth-child(2) {
        flex-basis: 21%;
      }
      li:nth-child(3) {
        flex-basis: 30%;
      }
      li:nth-child(4) {
        flex-basis: 30%;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 6rem 2.5rem 0 2.5rem;
  width: 100%;
  max-width: 56rem;
  position: relative;
  margin: 0 auto;

  @media ${mediaQueries.tablet} {
    padding: 2.5rem;
  }

  @media ${mediaQueries.mediumScreens} {
    padding: 4rem;
  }

  button.btnMenu {
    position: absolute;
    top: 2.3rem;
    height: 2.5rem;

    @media ${mediaQueries.tablet} {
      display: none;
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 2rem;
  top: 2.3rem;

  @media ${mediaQueries.tablet} {
    top: 2.8rem;
  }

  @media ${mediaQueries.mediumScreens} {
    top: 4.3rem;
    right: 4rem;
  }
`;
