import React, { useCallback } from 'react';
import { Container } from './styles';

interface NavItemProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  title,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = useCallback(() => {
    console.log(id);
    setActiveTab(id);
  }, []);

  return (
    <Container active={activeTab === id} onClick={handleClick}>
      {title}
    </Container>
  );
};

export default NavItem;
