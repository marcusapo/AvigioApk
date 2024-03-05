import styled from 'styled-components'
import { IndexStyledProps } from './models'
import { primary } from '../../constants/colors'

export const Main = styled.div`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    margin: 20px 0;
    gap: 10px;
`

export const BoxBar = styled.div<IndexStyledProps>`
    width: 70px;
    max-height: 200px;
    height: ${({ value }) => `${value}px`};
    align-items: center;
    gap: 10px;

    @media only screen and (max-width: 800px) {
        & {
            width: 180px;
        }
    }
`

export const Bar = styled.button<IndexStyledProps>`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: ${primary};
`