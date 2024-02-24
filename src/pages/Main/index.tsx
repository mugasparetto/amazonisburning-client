import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  TextStrip,
  Content,
  Description,
  TimeContainer,
  AboutLink,
  AboutContainer,
} from './styles';
import Portal from '../../components/Portal';
import TimeElapsed from '../../components/TimeElapsed';

import bg from '../../assets/background-video.mp4';
import Close from '../../assets/close.svg';
import { socket } from '../../socket';

const Main: React.FC = () => {
  const [wildfiresCount, setWildfiresCount] = useState(0);
  const [portalOpen, setPortalOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
      <video id="background-video" autoPlay loop muted playsInline>
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
          Fires burning in the Amazon rainforest since this application was
          submitted
        </Description>
        <TimeContainer>
          <TimeElapsed />
        </TimeContainer>
      </Content>
      <AboutLink
        onClick={() => {
          setAboutOpen(true);
        }}
      >
        About this project
      </AboutLink>
      <AboutContainer open={aboutOpen}>
        <button
          onClick={() => {
            setAboutOpen(false);
          }}
        >
          <img src={Close} alt="Close icon" />
        </button>
        <p>
          This project was developed by{' '}
          <a
            href="https://linkedin.com/in/mugasparetto"
            target="_blank"
            rel="noreferrer"
          >
            Murilo Gasparetto
          </a>{' '}
          in partnership with{' '}
          <a href="https://ipam.org.br/" target="_blank" rel="noreferrer">
            IPAM Amazonia
          </a>
          , which also kindly shared the video clips seen. The data shown is
          being gathered in near real-time from the{' '}
          <a
            href="http://terrabrasilis.dpi.inpe.br/queimadas/portal/"
            target="_blank"
            rel="noreferrer"
          >
            Brazilian government
          </a>
          .
        </p>
      </AboutContainer>
      <Portal portalToggle={handlePortalToggle} />
    </Container>
  );
};

export default Main;
