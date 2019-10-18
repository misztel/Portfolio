import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H1 from "../Semanatic/H1";


const AboutMeWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-pack: center;
  position: relative;
  align-items: flex-start;
  background-color: ${colors.white};
  color: ${colors.primary};
`;

const AboutMe = () => (
  <AboutMeWrapper>
    <H1 secondary>O Mnie</H1>
    <p>  
      Cześć tu Maciek, helloo. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    </p>
  </AboutMeWrapper>
);

export default AboutMe;
