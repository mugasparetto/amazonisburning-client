import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Navigation = styled.nav`
  background: red;
  padding: 2.5rem;

  ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      transform: rotate(-90deg);
    }
  }
`;

export const Content = styled.div`
  background: blue;
  padding: 4rem;
  width: 100%;
`;
