import React from 'react';
import H2 from '../Semanatic/H2';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Section from '../Section/Section';

const Contact = () => {
    return(
      <Section>
        <Row>
          <Container>
            <Column xs="12">
              <H2 center secondary>Contact</H2>
            </Column>
          </Container>
          <Container wide>
            <Column xs="12" md="12">
              <p>This is siple text</p>
            </Column>
          </Container>
        </Row>
      </Section>
  )
};

export default Contact;
