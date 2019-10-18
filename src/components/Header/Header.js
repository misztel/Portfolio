import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuDesktop from '../Menu/MenuDesktop';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Container from '../Container/Container';

const HeaderWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Row>
        <Container push wide>
          <Column xs="6" md="3">
            <Logo />
          </Column>
          <Column xxs="1" xs="1" md="9">
            <MenuDesktop />
            <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
            <Menu isOpen={isMenuOpen} />
          </Column>
        </Container>
      </Row>
    </HeaderWrapper>
  );
};

export default Header;
