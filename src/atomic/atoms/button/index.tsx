import { IndexProps } from "./models"
import { Main } from "./style"

const Button: React.FC<IndexProps> = ({
    text,
    size,
    color,
    onClick,
    type = 'normal',
    disabled,
    displayNone,
    mt,
    mr,
    mb,
    ml,
    className
}) => (
    <Main
        size={size}
        color={color}
        onClick={onClick}
        type={type}
        disabled={disabled}
        displayNone={displayNone}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        className={className}
    >
        {
            (size === 'medium' || size === 'middle') && type === 'normal' && (
                <h4
                    className={`
                        ${
                            color === 'primary' ||
                            color === 'secundary' ||
                            color === 'red' ||
                            color === 'orange' ||
                            color === 'green'
                            ? 'fontWhite'
                            : 'fontSecundary'
                        }
                        fontW700
                    `}
                >
                    { text }
                </h4>
            )
        }
        {
            size === 'medium' && type === 'underline' && (
                <h5
                    className={`
                        ${
                            color === 'primary' ||
                            color === 'secundary' ||
                            color === 'red'
                            ? 'fontPrimary'
                            : 'fontSecundary'
                        }
                        fontW400
                    `}
                >
                    { text }
                </h5>
            )
        }
        {
            size === 'big' && type === 'normal' && (
                <h5
                    className={`
                        ${
                            color === 'primary' ||
                            color === 'secundary' ||
                            color === 'red'
                            ? 'fontWhite'
                            : 'fontSecundary'
                        }
                        fontW400
                    `}
                >
                    { text }
                </h5>
            )
        }
        {
            size === 'big' && type === 'underline' && (
                <h5
                    className={`
                        ${
                            color === 'primary' ||
                            color === 'secundary' ||
                            color === 'red'
                            ? 'fontPrimary'
                            : 'fontSecundary'
                        }
                        fontW400
                    `}
                >
                    { text }
                </h5>
            )
        }
        {
            size === '100%' && (
                <h5
                    className={`
                        ${
                            (color === 'primary' ||
                            color === 'secundary' ||
                            color === 'green' ||
                            color === 'orange' ||
                            color === 'red') &&
                            type != 'underline'
                            ? 'fontWhite'
                            : 'fontSecundary'
                        }
                        fontW400
                    `}
                >
                    { text }
                </h5>
            )
        }
        {
            size === 'bigger' && (
                <h4
                    className='fontW500'
                >
                    { text }
                </h4>
            )
        }
    </Main>
)

export default Button