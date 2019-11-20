import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H2 from '../Semanatic/H2';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Button from  "../Button/Button";
import Img from '../../images/project1.jpg';


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
  padding: 0 0 50px 0;
`;

const Box = styled.div`
    width: 100%; 
    position: relative;
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: 10px;
  }
`;

const BoxContent = styled.div`
    width: 100%; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-pack: center;
    background-image: url(${Img});
    background-size: cover;
    color: ${colors.white};
    border-radius: 10px;
    transition: all 0.3s;
    height: 200px;

    :hover{
      transform: translate(8px, -8px);
    }
  }
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
                <BoxContent>
                  {/* <Button> Visit Website</Button>
                  <Button> See on Github</Button> */}
                </BoxContent>
              </Box>
            </Column>
            <Column xs="12" md="6">
            <Box>  
                <BoxContent>
                  {/* <Button> Visit Website</Button>
                  <Button> See on Github</Button> */}
                </BoxContent>
              </Box>
            </Column>
          </Container>
        </Row>
      </Section>
  )
};

export default Work;
