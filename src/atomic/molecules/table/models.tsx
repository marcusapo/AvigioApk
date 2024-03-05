import { TextWeight } from "@atomic/constants/text";
import { AlignItems } from "@atomic/constants/align";
import { SetText, SetVoid } from "@typing/set";

export interface IndexProps {
    columns: ColumnTableType[]
    data: LineTableType[]
    selectedItem: string;
    onSelectItem: SetText
    onDoubleClick: SetText
    onClick?: SetText
}

export type ColumnTableType = {
    label: string;
    size: number;
    align: AlignItems
    weight: TextWeight
    color?: string
    type?: 'status' | 'whatsapp' | 'edit' | 'history' | 'print'
    onClick?: SetVoid
}

export type StatusType = 'primary' | 'green' | 'red' | 'orange'

export type LineTableType = {
    id: string;
    data: ColumnTableType[]
}

export type LineStyledProps = {
    selected: boolean
}

export type StatusStyledProps = {
    status: StatusType
}