import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  /* &::-webkit-scrollbar {
    width: 2rem;
  } */

  .leaflet-bottom.leaflet-right {
    display: none;
  }
`;
