import { findColor } from "@atomic/constants/colors";

import IconArrow from "./icons/arrow";
import IconCorrect from "./icons/correct";

import { Main } from "./style";
import { IndexProps } from "./models";
import IconEdit from "./icons/edit";
import IconPaper from "./icons/paper";
import IconPrint from "./icons/print";

const Icon: React.FC<IndexProps> = ({
    name,
    size,
    fill,
    stroke,
    rotate,
    mt,
    mr,
    ml,
    mb
}) => {
    const findIcon = () => {
        switch (name) {
            case 'arrow':
                return { icon: <IconArrow />, viewBox: '10 15'};
            case 'correct':
                return { icon: <IconCorrect />, viewBox: '25 25'};
            case 'edit':
                return { icon: <IconEdit />, viewBox: '25 25'};
            case 'paper':
                return { icon: <IconPaper />, viewBox: '50 50'};
            case 'print':
                return { icon: <IconPrint />, viewBox: '30 30'};
            default:
                return { icon: null, viewBox: '738 588' }
        }
    }

    return (
        <Main
            size={size}
            rotate={rotate}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
        >
            <svg fill={findColor(fill)} stroke={findColor(stroke)} strokeWidth={2} height="100%" width="100%" viewBox={`0 0 ${findIcon().viewBox}`}>
                { findIcon().icon }
            </svg>
        </Main>
    )
}

export default Icon;