import React, { useState, useCallback } from 'react';

import { Container, CTA } from './styles';
import ArrowLeft from '../../assets/arrow-left.svg';
import PortalOpen from './PortalOpen';

interface PortalProps {
  portalToggle: (value: boolean) => void;
}

const Portal: React.FC<PortalProps> = ({ portalToggle }) => {
  const [open, setOpen] = useState(false);

  const openPortal = useCallback(() => {
    if (!open) {
      setOpen(true);
      portalToggle(true);
    }
  }, [portalToggle, open]);

  const closePortal = useCallback(() => {
    setOpen(false);
    portalToggle(false);
  }, [portalToggle]);

  return (
    <Container open={open} onClick={openPortal}>
      {!open ? (
        <CTA>
          <span>i want to know more</span>
          <img src={ArrowLeft} alt="Arrow left" />
        </CTA>
      ) : (
        <PortalOpen portalToggle={closePortal} />
      )}
    </Container>
  );
};

export default Portal;
