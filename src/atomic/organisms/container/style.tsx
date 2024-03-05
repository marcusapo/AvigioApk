import { blue } from "@atomic/constants/colors";
import styled from "styled-components";
import { IndexStyledProps } from "./models";

export const Main = styled.section<IndexStyledProps>`
    width: 100%;
    height:100vh;
    background-color:#fffbff;
    overflow: auto;
`

export const Section = styled.div`
    width: 100%;
    height:100vh;
    gap: 40px;

    @media only screen and (max-width: 800px) {
        & {
            flex-direction: column;
            padding: 10px 15px;
        }
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${blue};
`