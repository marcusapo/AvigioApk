import styled from "styled-components";
import { primary, secundary, white } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div<IndexStyledProps>`
    width: ${({ width }) => width ?? 'max-content'};
    height: ${({ height }) => height ?? 'max-content'};
    background-color: ${({ color }) => color === 'white' ? white : secundary};
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
    color: ${({ color }) => color === 'white' ? secundary : white};
    justify-content: center;
    border: 1px solid #e1e1e1;

    @media only screen and (max-width: 800px) {
        & {
            width: 100%;
            align-items: center;
        }
    }
`

export const ButtonTo = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background-color: ${primary};
    justify-content: center;
    align-items: center;
`