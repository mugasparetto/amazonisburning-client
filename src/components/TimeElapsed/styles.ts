import styled from 'styled-components';

import { colors } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
`;

export const TimeBox = styled.div`
  border: solid 2px ${colors.neutral.white};
  margin-right: 0.5rem;
  padding: 1rem 0;
  width: 5rem;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span:first-child {
    font-size: 2rem;
    font-weight: bold;
  }

  > span:last-child {
    font-size: 1.25rem;
  }
`;
