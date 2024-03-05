import { SetVoid } from "../../../types/set";
import { Alignments } from "../../constants/align";
import { Margins, Padding, Position } from "../../constants/spacing";

export interface IndexProps extends Margins, Padding, Position, Alignments {
    width?: string;
    height?: string;

    flex?: string | number;
    bgColor?: string | undefined;
    scroll?: string;
    radius?: string | number;
    border?: string;
    children?: React.ReactNode | React.ReactNode[] | undefined;

    display?: string;

    onClick?: SetVoid;
}