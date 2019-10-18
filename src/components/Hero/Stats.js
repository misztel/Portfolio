import React, {useEffect} from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import H1 from "../Semanatic/H1";


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


    useEffect(() =>{
        var circle = document.querySelector('circle');
        console.log(circle.r);
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
        }

        setProgress(10);
    }, []);

  return(
    <StatsWrapper>
        <H1>Stats</H1>
        <div>
        <svg
            className="progress-ring"
            width="120"
            height="120">
            <circle
                className="progress-ring__circle"
                stroke="white"
                strokeWidth="4"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
            />
        </svg>
        <svg
            className="progress-ring"
            width="120"
            height="120">
            <circle
                className="progress-ring__circle"
                stroke="white"
                strokeWidth="4"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
            />
        </svg>
        </div>
    </StatsWrapper>
  ) 
};

export default Stats;
