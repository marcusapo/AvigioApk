import styled from "styled-components";
import { IndexStyledProps } from "./models";
import { greyLight, orange, cian, primary, red, secundary, greenLight, yellow, blueLight, white } from "@atomic/constants/colors";

export const Main = styled.div<IndexStyledProps>`
    width: ${({ width }) => width ?? 'null'};
`

export const InputBox = styled.div<IndexStyledProps>`
    ${({ size }) => size === 'mini' && 'width: 120px'};
    ${({ size }) => size === 'mini' && 'height: 40px'};
    ${({ size }) => size === 'small' && 'width: 160px'};
    ${({ size }) => size === 'small' && 'height: 40px'};
    ${({ size }) => size === 'smaller' && 'width: 250px'};
    ${({ size }) => size === 'smaller' && 'height: 40px'};
    ${({ size }) => size === 'medium' && 'width: 280px'};
    ${({ size }) => size === 'medium' && 'height: 40px'};
    ${({ size }) => size === 'big' && 'width: 300px'};
    ${({ size }) => size === 'big' && 'height: 40px'};
    ${({ size }) => size === '100%' && 'width: 100%'};
    ${({ size }) => size === '100%' && 'height: 40px'};

    background-color: ${white};
    ${({ color }) => color === 'primary' && `background: ${primary}`};
    ${({ color }) => color === 'secundary' && `background: ${secundary}`};
    ${({ color }) => color === 'orange' && `background: ${orange}`};
    ${({ color }) => color === 'yellow' && `background: ${yellow}`};
    ${({ color }) => color === 'greenLight' && `background: ${greenLight}`};
    ${({ color }) => color === 'blueLight' && `background: ${blueLight}`};
    ${({ color }) => color === 'red' && `background: ${red}`};
    ${({ color }) => color === 'greyLight' && `background: ${greyLight}`};

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    border:1px solid ${primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};
`

export const TextInput = styled.input`
    color: ${secundary};
    width: 100%;
    flex: 1;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-weight: medium;

    @media only screen and (max-width: 600px) {
        font-size: 17px;
    }
`