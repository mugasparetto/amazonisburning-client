import styled from 'styled-components';

import Tooltip from '../../components/Tooltip';

import bg from '../../assets/amazonburning.jpeg';
import { colors } from '../../constants/colors';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  color: ${colors.neutral.white};
  position: absolute;
  left: 6rem;
  top: 50%;
  transform: translate(0, -50%);
`;

export const Description = styled.h3`
  opacity: 0.8;
  max-width: 41rem;
`;

export const Help = styled(Tooltip)`
  margin-top: 1rem;
`;
