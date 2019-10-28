import styled from 'styled-components';
import { colors } from '../../utils/colors';

const H2 = styled.h2`
    color: ${props => props.secondary ? colors.primary : colors.white};
    font-weight: ${props => props.big ? '800' : '600'};
    font-size: 32px;
    display: flex;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    margin: 30px 0 20px 0;
`;

export default H2;