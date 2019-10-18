import styled from 'styled-components';
import { colors } from '../../utils/colors';

const H1 = styled.h1`
    color: ${props => props.secondary ? colors.primary : colors.white};
    font-weight: ${props => props.big ? '800' : '600'};
    font-size: ${props => props.big ? '60px' : '28px'};
`;

export default H1;