import styled from 'styled-components';

import { colors } from '../../../../constants/colors';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.li<ContainerProps>`
  color: ${(props) =>
    props.active ? colors.neutral.darkest : colors.neutral.medium};
  flex-grow: 1;
  position: relative;
  width: 3.5rem;
  cursor: pointer;

  span {
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;
