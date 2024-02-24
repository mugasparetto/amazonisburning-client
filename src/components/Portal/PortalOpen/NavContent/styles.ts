import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    max-width: calc(100% - 40px - 1rem);
  }
`;

export const ScrollContainer = styled.div`
  overflow: auto;
  padding-right: 1rem;

  p:last-child,
  ol li:last-child {
    margin-bottom: 2.5rem;
  }
`;
