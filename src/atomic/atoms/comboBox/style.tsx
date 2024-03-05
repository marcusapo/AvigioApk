import styled from "styled-components";
import { cian, greyLight, primary, white } from "~/atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.select<IndexStyledProps>`
    all: inherit;
    ${({ size }) => size === 'small' && 'width: 160px'};
    ${({ size }) => size === 'small' && 'height: 40px'};
    ${({ size }) => size === 'medium' && 'width: 280px'};
    ${({ size }) => size === 'medium' && 'height: 40px'};
    ${({ size }) => size === '100%' && 'width: 100%'};
    ${({ size }) => size === '100%' && 'height: 40px'};
    background-color: ${greyLight};
    border-radius: 10px;
    border: 1px solid ${primary};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 15px;
    font-size: 16px;
    cursor: pointer;
`