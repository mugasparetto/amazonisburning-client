import React, { useState, useCallback } from 'react';

import NavItem from './NavItem';
import NavContent from './NavContent';
import Map from './NavContent/Map';
import Methodology from './NavContent/Methodology';
import Fires from './NavContent/Fires';
import Solutions from './NavContent/Solutions';
import { useMediaQuery } from '../../../hooks/mediaQuery';

import { Container, Navigation, Content, ButtonClose } from './styles';
import Close from '../../../assets/close.svg';
import { mediaQueries } from '../../../constants/mediaQueries';

interface PortalOpenProps {
  portalToggle: (value: boolean) => void;
}

const PortalOpen: React.FC<PortalOpenProps> = ({ portalToggle }) => {
  const [activeTab, setActiveTab] = useState('map');
  const [menuOpen, setMenuOpen] = useState(false);
  const isTabletAndAbove = useMediaQuery(`${mediaQueries.tablet}`);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <Container>
      <Navigation open={menuOpen}>
        {!isTabletAndAbove && (
          <ButtonClose onClick={handleMenuToggle}>
            <img src={Close} alt="Close icon" />
          </ButtonClose>
        )}

        <ul>
          <NavItem
            title="map"
            id="map"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleMenu={handleMenuToggle}
          />
          <NavItem
            title="methodology"
            id="methodology"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleMenu={handleMenuToggle}
          />
          <NavItem
            title="why so many fires"
            id="fires"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleMenu={handleMenuToggle}
          />
          <NavItem
            title="possible solutions"
            id="solutions"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleMenu={handleMenuToggle}
          />
        </ul>
      </Navigation>
      <Content>
        <ButtonClose
          onClick={() => {
            portalToggle(false);
          }}
        >
          <img src={Close} alt="Close icon" />
        </ButtonClose>

        <button className="btnMenu" onClick={handleMenuToggle}>
          <span>menu</span>
        </button>

        <NavContent id="map" activeTab={activeTab}>
          <Map />
        </NavContent>
        <NavContent id="methodology" activeTab={activeTab}>
          <Methodology setActiveTab={setActiveTab} />
        </NavContent>
        <NavContent id="fires" activeTab={activeTab}>
          <Fires />
        </NavContent>
        <NavContent id="solutions" activeTab={activeTab}>
          <Solutions />
        </NavContent>
      </Content>
    </Container>
  );
};

export default PortalOpen;
