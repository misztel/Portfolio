import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Button = styled.button`
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.secondary ? colors.white : colors.primary};
    background-color: ${props => props.secondary ? 'transparent' : colors.white};
    border: solid 2px ${colors.white};
    border-radius: 30px;
    cursor: pointer;
    margin: ${props => props.hero ? '20px 10px 20px 0px' : '20px auto'};
    padding: 14px 40px;
    transition: background-color 0.7s ease 0s, color 0.7s ease 0s;
    width: fit-content;

  :hover {
    color: ${props => props.secondary ? colors.primary : colors.white};
    background-color: ${props => props.secondary ? colors.white : colors.transparent};
  }
`;

export default Button;
