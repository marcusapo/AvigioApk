import { blue, cian, primary, red, secundary, white } from "@atomic/constants/colors";
import Link from "next/link";
import styled from "styled-components";
import { NavigationStyledProps, OptionStyledProps } from "./models";

export const Logo = styled.div `
    position:fixed;
    left:3%;
    cursor: pointer;
`

export const Option = styled(Link)<OptionStyledProps>`
    color: #d7d7d7;
    font-size: 17px;
    transition: ease 0.5s;
    color: #000;
    font-weight:bold;
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1500px) {
        font-size: 17px;
    }
    
    &:hover {
        font-weight:bold;
        scale:1.1;
    }
`;

export const Main = styled.header`
    width: 100vw;
    height: 10%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    transition: ease 0.8s;
    position:fixed;
    z-index:999;

    @media only screen and (max-width: 1000px) {
        justify-content: space-between;
    }
    
    @media only screen and (max-width: 1120px) {
        gap: 40px;
    }
`;

export const Line = styled.div`
    width: 30px;
    height: 3px;
    background-color: ${white};
    cursor: pointer;
`

export const RightNavigation = styled.section<NavigationStyledProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${secundary};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    padding: 0 40px;
    z-index: 999;
    right: ${({ showNavigation }) => showNavigation ? '0px' : '-100vw'};
`
