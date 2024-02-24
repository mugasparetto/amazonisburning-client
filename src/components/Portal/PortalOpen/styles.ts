import styled from 'styled-components';
import { mediaQueries } from '../../../constants/mediaQueries';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Navigation = styled.nav`
  padding: 1.5rem;
  border-right: solid 2px black;

  @media ${mediaQueries.largeScreensAndAbove} {
    padding: 2.5rem;
  }

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
  position: relative;

  > button {
    position: absolute;
    right: 4rem;
    top: 4.3rem;
  }
`;
