import styled from 'styled-components';

import { colors } from '../../constants/colors';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: ${(props) => (props.open ? 'auto' : 'pointer')};
  background: ${colors.neutral.white};
  padding: ${(props) => (props.open ? 0 : '2.5rem')};
  height: ${(props) => (props.open ? '100vh' : 'auto')};
  width: ${(props) => (props.open ? '50vw' : 'auto')};

  position: absolute;
  bottom: 0;
  right: 0;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.09rem;
    text-transform: uppercase;
  }
`;

export const CTA = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 2rem;
  }
`;
