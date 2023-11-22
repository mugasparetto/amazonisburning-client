import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  TextStrip,
  Content,
  Description,
  TimeContainer,
} from './styles';
import Portal from '../../components/Portal';
import TimeElapsed from '../../components/TimeElapsed';

import bg from '../../assets/background-video.mp4';
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
      <video id="background-video" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <TextStrip>
        <ul className="marquee__content">
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
          <li>live data </li>
        </ul>
      </TextStrip>
      <Content open={portalOpen}>
        <h1>{wildfiresCount}</h1>
        <Description>
          Fires burning in the Amazon rainforest since Sunday morning; it's
          been:
        </Description>
        <TimeContainer>
          <TimeElapsed />
        </TimeContainer>
      </Content>
      <Portal portalToggle={handlePortalToggle} />
    </Container>
  );
};

export default Main;
