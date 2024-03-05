import styled from "styled-components";
import { blueLight, green, primary, red, secundary, white } from "@atomic/constants/colors";
import { LineStyledProps, StatusStyledProps } from "./models";
import Image from "next/image";

export const Main = styled.section`
    width: 100%;

    :nth-child(2){
        border-radius:20px 20px 0px 0px;
    }

    :last-child {
        border-radius:0px 0px 20px 20px;
    }

    @media only screen and (max-width: 800px) {
        & {
            width: 100%;
            padding-right: 20px;
            overflow: scroll;
        }
    }
`

export const Line = styled.div<LineStyledProps>`
    width: 100%;
    height: 60px;
    background-color: ${({ selected }) => selected  ? `${blueLight}` : `${white}`};
    /* box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.25); */
    flex-direction: row;
    cursor: pointer;
    transition: .2s;
    padding-left: 15px;
    border: 1px solid #e1e1e1;

    &:hover {
        background-color: ${blueLight};
    }

    @media only screen and (max-width: 800px) {
        & {
            width: 1000px;
            height: max-content;
            gap: 20px;
            padding: 20px 10px;
        }

        & div {
            align-items: center;
        }
    }
`

export const WhatsApp = styled(Image)`
    width: 30px;
    height: 30px;
    object-fit: contain;
`

export const Status = styled.div<StatusStyledProps>`
    width: 30px;
    height: 30px;
    border-radius: 100% !important;
    ${({ status }) => status === 'primary' && `background-color: ${primary};`}
    ${({ status }) => status === 'green' && `background-color: ${green};`}
    ${({ status }) => status === 'red' && `background-color: ${red};`}
`