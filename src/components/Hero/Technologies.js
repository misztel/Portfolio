import React from 'react';
import H2 from '../Semanatic/H2';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Section from '../Section/Section';
 
const Technologies = () => {
    return(
      <Section background>
        <Row>
          <Container>
            <Column xs="12">
              <H2 center>Technologies</H2>
            </Column>
          </Container>
          <Container wide>
            <Column xs="12" md="3">
                Tech
            </Column>
            <Column xs="12" md="3">
                Tech
            </Column>
            <Column xs="12" md="3">
                Tech
            </Column>
            <Column xs="12" md="3">
                Tech
            </Column>
            <Column xs="12" md="3">
                Tech
            </Column>
            <Column xs="12" md="3">
                Tech
            </Column>

          </Container>
        </Row>
      </Section>
  )
};

export default Technologies;
