import React, { useCallback } from 'react';
import { Container } from './styles';

interface NavItemProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
  style?: object;
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  title,
  activeTab,
  setActiveTab,
  style = {},
}) => {
  const handleClick = useCallback(() => {
    setActiveTab(id);
  }, [id, setActiveTab]);

  return (
    <Container $active={activeTab === id} style={style} onClick={handleClick}>
      <span>{title}</span>
    </Container>
  );
};

export default NavItem;
