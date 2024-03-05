import { IndexProps } from "./models"
import { Backdrop, Main } from "./style"

const Modal: React.FC<IndexProps> = ({
    title,
    isVisible,
    children,
    onClose,
}) => {
    return !isVisible ? (
        <></>
    ) : (
        <Backdrop onClick={onClose}>
            <Main>
                <h1>{ title }</h1>
                { children }
            </Main>
        </Backdrop>
    )
}

export default Modal