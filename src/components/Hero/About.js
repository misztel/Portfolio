import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H2 from '../Semanatic/H2';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';

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
        <Row>
          <Container>
            <Column xxs="12">
              <H2 center secondary>About Me</H2>
            </Column>
          </Container>
        </Row>
        <Row>
          <Container>
            <Column xxs="12">
              <p>  
                  Lorem ipsum dolor sit amet, consectetur,ipsum dolor sit amet 
                  consectetur, ipsum dolor sit amet, consectetur
              </p>
            </Column>
          </Container>
        </Row>
      </AboutWrapper>
  )
};

export default AboutMe;
