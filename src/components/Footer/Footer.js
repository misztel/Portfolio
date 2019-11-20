import styled from 'styled-components';
import React from 'react';
import { colors } from '../../utils/colors';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Column from '../Column/Column';
import Section from '../Section/Section';
 
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-pack: center;
    align-items: center;
`;

const Logo = styled.p`
    font-size: 1.3rem;
    color: ${colors.white};
`;

const Copy = styled.p`
    font-size: 12px;
    font-weight: 600;
`;

const Footer = () => {
    return(
      <Section background>
        <Row>
          <Container wide>
            <Column xs="12" md="12">
                <ContentWrapper>
                    <Logo>Maciej Misztela</Logo>
                    <div className="front-ico"> 
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <Copy>© 2019 Maciej Misztela. All rights reserved</Copy>
                </ContentWrapper>
            </Column>
          </Container>
        </Row>
      </Section>
  )
};

export default Footer;
