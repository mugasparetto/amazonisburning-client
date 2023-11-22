import styled from 'styled-components';

import { colors } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  letter-spacing: 0.09rem;

  > span {
    font-weight: bold;
  }
`;

export const TimeModule = styled.div`
  color: ${colors.neutral.white};

  > span:first-child {
    font-weight: bold;
    margin-right: 0.25rem;
    width: 2rem;
  }

  > span:last-child {
    text-transform: uppercase;
    margin-right: 0.75rem;
    opacity: 0.8;
  }
`;
