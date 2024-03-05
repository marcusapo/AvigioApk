import { InputSizeType } from "@atomic/constants/input"
import { SetVoid } from "@typing/set";
import { Margins } from "@atomic/constants/spacing";

export interface IndexProps extends Margins {
    text: string
    size: InputSizeType;
    color: ButtonColorType
    onClick: SetVoid;
    type?: ButtonType
    disabled?: boolean
    displayNone?: boolean
    className?: string;
}


type ButtonColorType = 'primary'
                        | 'secundary'
                        | 'orange'
                        | 'green'
                        | 'greyLight'
                        | 'red'

type ButtonType = 'normal' | 'underline'
                
export type IndexStyledProps = {
    size: InputSizeType;
    color: ButtonColorType
    type: ButtonType
    disabled?: boolean
    displayNone?: boolean
} & Margins