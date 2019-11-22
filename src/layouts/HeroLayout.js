import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import "./herolayout.css";
import { colors } from '../utils/colors';
import Header from '../components/Header/Header';


const GlobalStyle = createGlobalStyle`

  body{
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    color: #fff;
  }

  img{
    width: 100%;
  }

  *, *::before *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left bottom, rgb(51, 178, 223), rgb(43, 171, 224), rgb(39, 165, 224), rgb(43, 157, 224), rgb(51, 150, 223));
  color: ${colors.white};
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default Layout;
