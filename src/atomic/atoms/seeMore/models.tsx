import { ColorType } from "~/atomic/constants/colors";

export interface IndexProps {
    text: string;
    color?: ColorType;
    type: TypeSee
}

type TypeSee = 'normal' | 'row'