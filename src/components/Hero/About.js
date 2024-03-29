import React from 'react';
import H2 from '../Semanatic/H2';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Section from '../Section/Section';

const AboutMe = () => {
    return(
      <Section>
        <Row>
          <Container>
            <Column xxs="12">
              <H2 center secondary>About Me</H2>
            </Column>
          </Container>
          <Container>
            <Column xxs="12">
              <p>  
                  Lorem ipsum dolor sit amet, consectetur,ipsum dolor sit amet 
                  consectetur, ipsum dolor sit amet, consectetur
              </p>
            </Column>
          </Container>
        </Row>
      </Section>
  )
};

export default AboutMe;
