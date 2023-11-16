import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Navigation = styled.nav`
  padding: 2.5rem;
  border-right: solid 2px black;

  ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Content = styled.div`
  /* background: blue; */
  padding: 4rem;
  width: 100%;
`;
