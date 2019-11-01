import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Section = styled.div`
    height: auto;
    padding: 40px 0px 40px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-pack: center;
    position: relative;
    align-items: flex-start;
    background-image: ${props => props.background ? 'linear-gradient(to left bottom, rgb(51, 178, 223), rgb(43, 171, 224), rgb(39, 165, 224), rgb(43, 157, 224), rgb(51, 150, 223))' : colors.white};
    color: ${props => props.background ? colors.white : colors.primary};
`;

export default Section;

