import styled from "styled-components";
import { IndexStyledProps } from "./models";
import { green, greyLight, orange, cian, primary, red, secundary } from "@atomic/constants/colors";

export const Main = styled.div<IndexStyledProps>`
    width: ${({ width }) => width ?? 'null'};
`

export const InputBox = styled.div<IndexStyledProps>`

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:125px;

    background-color:#C9C9C9;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};
`

export const TextInput = styled.textarea`
    color: ${secundary};
    background-color: ${greyLight};
    border:none;
    height:100%;
    flex: 1;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-weight: medium;

    @media only screen and (max-width: 600px) {
        font-size: 17px;
    }
`