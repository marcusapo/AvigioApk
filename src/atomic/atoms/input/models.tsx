import { FocusEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";
import { Margins } from "@atomic/constants/spacing";
import { TextAlign } from "@atomic/constants/text";
import { SetBoolean, SetVoid } from "@typing/set";
import { InputSizeType } from "@atomic/constants/input";
import { OptionsType, SetOptionsType } from "../comboBox/models";

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
    options?: OptionsType[]
    list?: string
    disabled?: boolean
    className?: string;
    style?: any
}

type Button = {
    onPress?: () => void;
}

type InputColorType = 'primary'
                        | 'secundary'
                        | 'orange'
                        | 'greenLight'
                        | 'greyLight'
                        | 'blueLight'
                        | 'red'
                        | 'yellow'
                        | 'white'

export type IndexStyledProps = {
    width?: string;
    textAlign?: TextAlign;
    size?: InputSizeType;
    color?:InputColorType
} & Margins