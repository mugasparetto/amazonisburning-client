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

export const TextStrip = styled.div`
  color: ${colors.neutral.white};
  position: absolute;
  width: 100vh;
  left: 4rem;
  bottom: 0;
  transform-origin: left bottom;
  transform: rotateZ(-90deg);
  opacity: 0.64;

  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.09rem;
  text-transform: uppercase;

  --gap: 0rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);

  .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll 20s linear infinite;
    list-style: square;
  }

  .marquee__content > * {
    padding-left: 0.5rem;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }

  /* .marquee {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
  }

  .marquee span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 60s linear infinite;
  }

  .marquee2 span {
    animation-delay: 30s;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  } */
`;

export const Content = styled.div<ContentProps>`
  color: ${colors.neutral.white};
  position: absolute;
  left: 9rem;
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
  /* margin-top: 1rem; */
`;

export const TimeContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

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
