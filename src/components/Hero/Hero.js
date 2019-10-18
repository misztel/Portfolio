import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import Button from  "../Button/Button";
import Image from "../Image/Image";
import H1 from "../Semanatic/H1";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const HeroWrapper = styled.div`
  height: 100vh;
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

const HeroImage = styled.div`
  display: block;
  width: 40vw;
  right: 30px;
  bottom: 0px;
  position: absolute !important;
`;

const HeroData = styled.div`
  padding: 250px;
`;

const Hero = () => (
  <>
    <HeroWrapper>
      <HeroData>
        <H1>I'm</H1>
        <H1 big>Maciej Misztela</H1>
        <H1>Frontend Developer</H1>
        
        <Button>Contact me</Button>
        <Button secondary>Download CV</Button>
        <div className="front-ico"> 
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </HeroData>  
      <HeroImage>
        <div style={{ maxWidth: `700px`}}>
            <Image />
          </div>
      </HeroImage>
        {/* 
        3. Socials */}
    </HeroWrapper>
  </>
);

export default Hero;
