import { Margins } from "~/atomic/constants/spacing";
import { InputSizeType } from "~/atomic/constants/input";
import { SetFile } from "~/types/set";

export interface IndexProps extends Margins {
    file: FileList | null
    setFile: SetFile
    accept?: string;
    label?: string
    subLabel?: string
}

export type IndexStyledProps = {
    size: InputSizeType;
} & Margins