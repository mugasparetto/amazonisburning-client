import React, { useState, useEffect } from 'react';

import { Container, Content, Description, Help } from './styles';
import HelpIcon from '../../assets/help-icon.svg';
import { socket } from '../../socket';

const Main: React.FC = () => {
  const [wildfiresCount, setWildfiresCount] = useState(0);

  useEffect(() => {
    function updateWildfiresCount(value: number) {
      console.log(value);
      setWildfiresCount(value);
    }

    socket.on('initial state', updateWildfiresCount);
    socket.on('new wildfires count', updateWildfiresCount);

    return () => {
      socket.off('initial state', updateWildfiresCount);
      socket.off('new wildfires count', updateWildfiresCount);
    };
  }, []);

  return (
    <Container>
      <Content>
        <h1>{wildfiresCount}</h1>
        <Description>
          Fires burning in the Amazon rainforest since this exhibition started
        </Description>
        <Help>
          <img style={{ opacity: 0.8 }} src={HelpIcon} alt={'Question mark'} />
        </Help>
      </Content>
    </Container>
  );
};

export default Main;
