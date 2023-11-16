import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>
        The data shown was gathered from the{' '}
        <a
          href="http://terrabrasilis.dpi.inpe.br/queimadas/portal/"
          target="_blank"
          rel="noreferrer"
        >
          Brazilian government
        </a>
        , via satellite monitoring, using the satellite GOES-16 as reference.
        Repeated focuses are not counted more than once.
      </span>
    </Container>
  );
};

export default Tooltip;
