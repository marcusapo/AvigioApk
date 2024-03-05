import styled from "styled-components";
import { cian, green, greyLight, orange, primary, red, secundary } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div<IndexStyledProps>`
    ${({ size }) => size === 'small' && 'width: 130px'};
    ${({ size }) => size === 'small' && 'height: 30px'};
    ${({ size }) => size === 'medium' && 'width: 140px'};
    ${({ size }) => size === 'medium' && 'height: 35px'};
    ${({ size }) => size === 'big' && 'width: 300px'};
    ${({ size }) => size === 'big' && 'height: 40px'};
    ${({ size }) => size === '100%' && 'width: 100%'};
    ${({ size }) => size === '100%' && 'height: 60px'};
    
    
    ${({ color }) => color === 'greyLight' && `background: ${greyLight}`};
    ${({ color }) => color === 'primary' && `background: ${primary}`};
    ${({ color }) => color === 'secundary' && `background: ${secundary}`};
    ${({ color }) => color === 'orange' && `background: ${orange}`};
    ${({ color }) => color === 'green' && `background: ${green}`};
    ${({ color }) => color === 'red' && `background: ${red}`};
    
    ${({ disabled }) => disabled && `background: ${cian}`};

    border-radius: 20px;

    align-items: center;
    justify-content: center;
    
    white-space:nowrap;
    transition: ease 0.8s;

    ${({ type }) => type === 'underline' && 'background: transparent;'};
    ${({ type }) => type === 'underline' && 'border-radius: 0;'};
    ${({ type }) => type === 'underline' && `border-bottom: 2px solid ${greyLight};`};
    ${({ type, color }) => type === 'underline' && color === 'primary' && `border-bottom: 2px solid ${primary};`};
    ${({ type, color }) => type === 'underline' && color === 'primary' && `color: ${primary};`};

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`