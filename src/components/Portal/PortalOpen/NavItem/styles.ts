import styled from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.li<ContainerProps>`
  color: ${(props) => props.active && 'blue'};
`;
