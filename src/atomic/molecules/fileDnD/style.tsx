import styled from "styled-components";
import { IndexProps } from "./models";
import { primary } from "~/atomic/constants/colors";

export const Main = styled.div<IndexProps>`
    width: 200px;
    height: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 3px dashed ${primary};
    text-align: center;
    cursor: pointer;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    @media only screen and (max-width: 650px) {
        width:200px;
        height:170px;
    }
    @media only screen and (max-width: 530px) {
        width:130px;
        height:140px;
    }
`

export const FileInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
`