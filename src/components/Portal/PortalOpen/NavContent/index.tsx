import React from 'react';
import { Container } from './styles';

interface NavContentProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

const NavContent: React.FC<NavContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <Container>{children}</Container> : null;
};

export default NavContent;
