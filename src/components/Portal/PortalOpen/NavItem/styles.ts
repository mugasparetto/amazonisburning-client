import styled from 'styled-components';

import { colors } from '../../../../constants/colors';
import { mediaQueries } from '../../../../constants/mediaQueries';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.li<ContainerProps>`
  color: ${(props) =>
    props.active ? colors.neutral.darkest : colors.neutral.medium};
  position: relative;
  cursor: pointer;
  text-align: center;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mediaQueries.tablet} {
    width: 3.5rem;
    height: initial;
    flex-grow: 1;
  }

  & + li {
    margin-top: 1rem;

    @media ${mediaQueries.tablet} {
      margin-top: 0;
    }
  }

  span {
    white-space: nowrap;

    @media ${mediaQueries.tablet} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }
`;
