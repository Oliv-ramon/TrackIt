import styled from "styled-components";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Footer = styled.footer`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    gap: 32px;

    background-color: #fff;

    position: fixed;
    bottom: 0;
    left: 0;

    button {
        font-weight: 400;
        line-height: 22px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.976px;

        color: #52B6FF;
    }

    .today {
        width: 91px;
        height: 91px;

        position: relative;
    }
`;

const CircularButton = styled(CircularProgressbar)`
    position: absolute;
    bottom: 30px;
    left: 0;
    
    circle.CircularProgressbar-background{
        fill: #52B6FF;
    }
    path.CircularProgressbar-path  {
        stroke: #FFF;
    }
    path.CircularProgressbar-trail {
        stroke: #52B6FF;
    }
    text.CircularProgressbar-text {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.976px;
        fill: #FFFFFF;
    }
`

export { Footer, CircularButton };