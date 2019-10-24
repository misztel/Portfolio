import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H1 from "../Semanatic/H1";
import Circle from './Circle';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';


const StatsWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-pack: center;
  position: relative;
  align-items: flex-start;
  background-image: linear-gradient(to left bottom, rgb(51, 178, 223), rgb(43, 171, 224), rgb(39, 165, 224), rgb(43, 157, 224), rgb(51, 150, 223));
  color: ${colors.white};
`;



const Stats = () => {

  return(
    <>
        <StatsWrapper>
            <Row>
                <Container>
                    <Column xxs="12">
                        <H1>Stats</H1>
                    </Column>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Column xs="12" md="3">
                        <Circle
                            radius={ 60 }
                            stroke={ 4 }
                            progress={ 80 }
                        />
                    </Column>
                    <Column xs="12" md="3">
                        <Circle
                            radius={ 60 }
                            stroke={ 4 }
                            progress={ 80 }
                        />
                    </Column>
                    <Column xs="12" md="3">
                        <Circle
                            radius={ 60 }
                            stroke={ 4 }
                            progress={ 80 }
                        />
                    </Column>
                    <Column xs="12" md="3">
                        <Circle
                            radius={ 60 }
                            stroke={ 4 }
                            progress={ 80 }
                        />
                    </Column>
                </Container>
            </Row>
        </StatsWrapper>
    </>
  ) 
};

export default Stats;
