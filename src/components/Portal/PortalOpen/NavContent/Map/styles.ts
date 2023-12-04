import styled from 'styled-components';
import { colors } from '../../../../../constants/colors';

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    text-align: center;
    color: ${colors.error};
  }
`;
