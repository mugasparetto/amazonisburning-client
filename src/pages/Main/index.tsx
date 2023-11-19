import React, { useState, useEffect, useCallback } from 'react';

import { Container, Content, Description, Help, TimeContainer } from './styles';
import Portal from '../../components/Portal';
import TimeElapsed from '../../components/TimeElapsed';

import HelpIcon from '../../assets/help-icon.svg';
import { socket } from '../../socket';

const Main: React.FC = () => {
  const [wildfiresCount, setWildfiresCount] = useState(0);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    function updateWildfiresCount(value: number) {
      setWildfiresCount(value);
    }

    socket.on('initial state', updateWildfiresCount);
    socket.on('new wildfires count', updateWildfiresCount);

    return () => {
      socket.off('initial state', updateWildfiresCount);
      socket.off('new wildfires count', updateWildfiresCount);
    };
  }, []);

  const handlePortalToggle = useCallback((value: boolean) => {
    setPortalOpen(value);
  }, []);

  return (
    <Container>
      <Content open={portalOpen}>
        <h1>{wildfiresCount}</h1>
        <Description>
          Fires burning in the Amazon rainforest since [ADD MESSAGE HERE]
        </Description>
        <Help>
          <img style={{ opacity: 0.8 }} src={HelpIcon} alt={'Question mark'} />
        </Help>
      </Content>
      <TimeContainer>
        <span>time elapsed</span>
        <TimeElapsed />
      </TimeContainer>
      <Portal portalToggle={handlePortalToggle} />
    </Container>
  );
};

export default Main;
