import { IndexProps } from "./models"
import { Main } from "./style"

export const Page: React.FC<IndexProps> = ({
    children
}) => {
    return (
        <Main>
            {children}
        </Main>
    )
}