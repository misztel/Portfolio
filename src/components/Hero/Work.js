import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H1 from '../Semanatic/H1';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Button from  "../Button/Button";


const WorkWrapper = styled.div`
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
      <WorkWrapper>
          <H1 secondary>Work</H1>
          <Row>
              <Container wide>
                  <Column xs="12" md="4">
                    <Box>  
                       <Button> Visit Website</Button>
                       <Button> See on Github</Button>
                    </Box>
                  </Column>
                  <Column xs="12" md="4">
                    <p>  
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </Column>
                  <Column xs="12" md="4">
                    <p>  
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </Column>
              </Container>
          </Row>
        
      </WorkWrapper>
  )
};

export default Work;
