import styled from 'styled-components'
import { IndexProps } from './models'

const BoxCommon = styled.div<IndexProps>`
    width: ${({ width }) => width ?? 'null'};
    height: ${({ height }) => height ?? 'null'};
    flex: ${({ flex }) => flex ?? 'none'};
    background-color: ${({ bgColor }) => bgColor ?? 'transparent'};

    border-radius: ${({ radius }) => radius ?? '0px'};
    border: ${({ border }) => border ?? '0'};

    flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
    justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
    align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
    gap: ${({ gap }) => gap ?? '0px'};
    flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};

    position: ${({ position }) => position ?? 'relative'};
    z-index: ${({ zIndex }) => zIndex ?? 1};

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    padding-top: ${({ pt }) => pt ?? '0px'};
    padding-left: ${({ pl }) => pl ?? '0px'};
    padding-right: ${({ pr }) => pr ?? '0px'};
    padding-bottom: ${({ pb }) => pb ?? '0px'};

    top: ${({ top }) => top ?? '0px'};
    left: ${({ left }) => left ?? '0px'};
    right: ${({ right }) => right ?? '0px'};
    bottom: ${({ bottom }) => bottom ?? '0px'};

    display: ${({ display }) => display ?? 'flex'};
`

export default BoxCommon;