import { BoxCommon } from "..";
import Icon from "../icon";
import { IndexProps } from "./models";
import { ButtonTo, Main } from "./style";

const Box: React.FC<IndexProps> = ({
    width,
    height,
    title,
    children,
    color = 'white',
    className,
    onClick
}) => (
    <Main color={color} width={width} height={height} className={className} onClick={onClick}>
        { title && (
            <BoxCommon
                width='100%'
                flexDirection="row"
                justifyContent={onClick ? 'space-between' : 'center'}
                alignItems="center"
                gap={onClick ? '50px' : '0px'}
            >
                <h3 className='fontW600 '>
                    { title }
                </h3>
                {
                    onClick && (
                        <ButtonTo onClick={onClick}>
                            <Icon name='arrow' size={20} fill='transparent' stroke='white' ml='3px' />
                        </ButtonTo>
                    )
                }
            </BoxCommon>
        ) }
        { children }
    </Main>
)

export default Box;