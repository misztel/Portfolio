import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H2 from '../Semanatic/H2';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Button from  "../Button/Button";
import Section from '../Section/Section';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-pack: center;
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: 12px;
`;

const Work = () => {
    return(
      <Section>
        <Row>
          <Container>
            <Column xs="12">
              <H2 center secondary>Work</H2>
            </Column>
          </Container>
          <Container wide>
            <Column xs="12" md="6">
              <Box>  
                  <Button> Visit Website</Button>
                  <Button> See on Github</Button>
              </Box>
            </Column>
            <Column xs="12" md="6">
              <Box>  
                  <Button> Visit Website</Button>
                  <Button> See on Github</Button>
              </Box>
            </Column>
          </Container>
        </Row>
      </Section>
  )
};

export default Work;
