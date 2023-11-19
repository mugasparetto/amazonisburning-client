import styled from 'styled-components';
import { colors } from '../../../../../constants/colors';

export const ErrorContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    text-align: center;
    color: ${colors.error};
  }
`;
