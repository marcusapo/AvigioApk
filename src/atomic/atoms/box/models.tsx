import { ChildrenType } from "@typing/variables"
import { SetVoid } from "@typing/set"

export interface IndexProps {
    width?: string;
    height?: string;
    title?: string
    children: ChildrenType
    color?: ColorType
    onClick?: SetVoid;
    className?: string;
}

export type IndexStyledProps = {
    width?: string;
    height?: string;
    color: ColorType
}

type ColorType = 'white' | 'secundary'