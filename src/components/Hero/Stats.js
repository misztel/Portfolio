import React from 'react';
import Circle from './Circle';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Section from '../Section/Section';


const Stats = () => {

  return(
    <Section background>
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
    </Section>
  ) 
};

export default Stats;
