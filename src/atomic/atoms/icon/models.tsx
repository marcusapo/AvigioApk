import { Rotate } from "@atomic/constants/align";
import { ColorType } from "../../constants/colors";
import { Margins } from "../../constants/spacing";

export interface IndexProps extends Margins {
    name: IconsName;
    size: number;
    fill: ColorType;
    stroke: ColorType;
    rotate?: Rotate;
}

export type IconsName = 'arrow' | 'correct' | 'edit' | 'paper' | 'print'
export type IconsType = {
    name: IconsName;
    size: number;
    fill: ColorType;
    stroke: ColorType;
}

export type IndexStyledProps = {
    size: number;
    rotate?: Rotate;
} & Margins