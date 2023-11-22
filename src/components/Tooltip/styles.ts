import styled from 'styled-components';

import { colors } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: inline-block;

  span {
    background: ${colors.neutral.white};
    width: 25rem;
    padding: 1rem;
    color: ${colors.neutral.darkest};
    opacity: 0;
    transform: translateX(0.5rem);
    transition: all 0.2s;
    visibility: hidden;
    line-height: 1.5rem;

    position: absolute;
    left: 2.5rem;

    &::before {
      content: '';
      border-style: solid;
      border-color: white transparent;
      border-width: 0.5rem 0.5rem 0 0.5rem;
      transform: rotate(90deg);
      position: absolute;
      top: 0.5rem;
      left: -0.75rem;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;
