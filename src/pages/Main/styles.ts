import styled from 'styled-components';

import Tooltip from '../../components/Tooltip';

import { colors } from '../../constants/colors';

interface ContentProps {
  open: boolean;
}

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  #background-video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Content = styled.div<ContentProps>`
  color: ${colors.neutral.white};
  position: absolute;
  left: 6rem;
  top: 50%;
  transform: translate(0, -50%);

  h1 {
    transform: ${(props) => (props.open ? 'scale(0.5)' : 'scale(1)')};
    margin-bottom: ${(props) => props.open && '-1.5rem'};
    transform-origin: bottom left;
    transition: all 0.4s;
  }
`;

export const Description = styled.h3`
  opacity: 0.8;
  max-width: 41rem;
`;

export const Help = styled(Tooltip)`
  margin-top: 1rem;
`;

export const TimeContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 6rem;

  > span {
    color: ${colors.neutral.white};
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.09rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    display: block;
  }
`;
