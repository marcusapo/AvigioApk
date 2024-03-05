import { Margins } from "~/atomic/constants/spacing";
import { SetVoid } from "../../../types/set";

export interface IndexProps extends Margins {
    data: ChartType[] | undefined;
}

export type ChartType = {
    value: number;
    label: string;
    onClick?: SetVoid;
}

export type IndexStyledProps = {
    value?: number;
    selected?: boolean;
    onClick?: SetVoid;
}