import styled from "styled-components";
import { IndexStyledProps } from "./models";

export const Main = styled.button<IndexStyledProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    justify-content: center;
    align-items: center;
    ${({ rotate }) => rotate == '90deg' && 'transform: rotate(90deg);'}
    ${({ rotate }) => rotate == '180deg' && 'transform: rotate(180deg);'}
    ${({ rotate }) => rotate == '270deg' && 'transform: rotate(270deg);'}
    
    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};
`