import styled from "styled-components";
import { white } from "~/atomic/constants/colors";

export const Backdrop = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
`

export const Main = styled.div`
    min-width: 400px;
    min-height: 300px;
    padding: 20px;
    border-radius: 18px;
    background-color: ${white};

    & > h1 {
        margin-bottom: 15px;
    }
`