import { IndexProps } from "./models";
import { Main } from "./style";

const Touch: React.FC<IndexProps> = ({
    onClick,
    children
}) => (
    <Main onClick={onClick}>
        { children }
    </Main>
)

export default Touch