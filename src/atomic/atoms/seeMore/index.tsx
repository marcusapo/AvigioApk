import { ExpandMore } from "@mui/icons-material"
import { IndexProps } from "./models"
import { Main, Text } from "./style"

export const SeeMore: React.FC<IndexProps> = ({
    text,
    color = 'primary'
}) => {
    return (
        <Main color={color}>
                <h4>{text}</h4>
                <ExpandMore/>
        </Main>
    )
}