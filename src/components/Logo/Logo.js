import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '../../utils/colors';

const StyledLogo = styled.div`
  font-size: 1.3rem;
  color: ${colors.white};
  padding: 20px 0;
  position: relative;
  z-index: 9999;
`;

const StyledLinkNav = styled(props => <Link {...props} />)`
  color: ${colors.white};

  :hover {
    color: ${colors.white};
  }
`;

const Logo = () => (
  <StyledLogo>
    <StyledLinkNav to="/"> Maciej Misztela</StyledLinkNav>
  </StyledLogo>
);

export default Logo;

