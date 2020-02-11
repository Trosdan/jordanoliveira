import React from 'react';
import {
  Container,
  LeftContainer,
  CenterContainer,
  MenuContainer,
  MenuItem,
  RighContainer,
} from './styles';

export default function Header() {
  return (
    <Container>
      <LeftContainer>Jordan.dev</LeftContainer>
      <CenterContainer>
        <MenuContainer>
          <MenuItem>Inicio</MenuItem>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>portifolio</MenuItem>
          <MenuItem>Contato</MenuItem>
        </MenuContainer>
      </CenterContainer>
      <RighContainer>Logo</RighContainer>
    </Container>
  );
}
