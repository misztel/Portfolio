import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H1 from '../Semanatic/H1';


const AboutWrapper = styled.div`
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

const AboutMe = () => {
    return(
      <AboutWrapper>
        <H1 secondary>O Mnie</H1>
        <p>  
            Lorem ipsum dolor sit amet, consectetur
        </p>
      </AboutWrapper>
  )
};

export default AboutMe;
