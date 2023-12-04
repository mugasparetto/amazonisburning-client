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
        The data shown is being gathered in near real-time from the Brazilian
        government. Repeated focuses are not counted more than once.
      </span>
    </Container>
  );
};

export default Tooltip;
