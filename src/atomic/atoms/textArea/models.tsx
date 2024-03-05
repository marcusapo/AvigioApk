import { FocusEventHandler, HTMLInputTypeAttribute } from "react";
import { Margins } from "@atomic/constants/spacing";
import { TextAlign } from "@atomic/constants/text";
import { SetBoolean, SetVoid } from "@typing/set";
import { InputSizeType } from "@atomic/constants/input";

export interface IndexProps extends Margins {
    value: string;
    onChangeText: (e: string) => void
    changeComplete?: boolean;
    label?: string;
    placeholder?: string;
    textAlign?: TextAlign;
    type?: HTMLInputTypeAttribute;
    actionButton?: Button | undefined;
    autoFocus?: boolean;
    onFocus?: (FocusEventHandler<HTMLInputElement> & SetBoolean)
    onBlur?: SetVoid;
    max?: number;
    min?: number;
    id?: string
    size: InputSizeType
    color?:InputColorType
}

type Button = {
    onPress?: () => void;
}

type InputColorType = 'primary'
                        | 'secundary'
                        | 'orange'
                        | 'green'
                        | 'greyLight'
                        | 'red'

export type IndexStyledProps = {
    width?: string;
    textAlign?: TextAlign;
    size?: InputSizeType;
    color?:InputColorType
} & Margins