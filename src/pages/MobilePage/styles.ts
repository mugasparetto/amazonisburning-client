import styled from 'styled-components';

import { colors } from '../../constants/colors';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.neutral.darkest};
`;
