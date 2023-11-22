import React, { useState } from 'react';

import NavItem from './NavItem';
import NavContent from './NavContent';
import Map from './NavContent/Map';
import Methodology from './NavContent/Methodology';
import Fires from './NavContent/Fires';
import Solutions from './NavContent/Solutions';

import { Container, Navigation, Content } from './styles';
import Close from '../../../assets/close.svg';

interface PortalOpenProps {
  portalToggle: (value: boolean) => void;
}

const PortalOpen: React.FC<PortalOpenProps> = ({ portalToggle }) => {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <Container>
      <Navigation>
        <ul>
          <NavItem
            title="map"
            id="map"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            style={{ flexBasis: '7%' }}
          />
          <NavItem
            title="methodology"
            id="methodology"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            style={{ flexBasis: '21%' }}
          />
          <NavItem
            title="why so many fires"
            id="fires"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            style={{ flexBasis: '30%' }}
          />
          <NavItem
            title="possible solutions"
            id="solutions"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            style={{ flexBasis: '30%' }}
          />
        </ul>
      </Navigation>
      <Content>
        <button
          onClick={() => {
            portalToggle(false);
          }}
        >
          <img src={Close} alt="Close icon" />
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
