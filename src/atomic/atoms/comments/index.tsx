import Image from "next/image"
import { IndexProps } from "./models"
import { Main, Photo } from "./style"
import LogoAvigio from '../../../assets/Avigio.png'
import { BoxCommon } from ".."
import photoIcon from '../../../assets/image 2.png'

export const Comments: React.FC<IndexProps> = ({
    company,
    name,
    text,
    photo
}) => {
    return (
        <Main>
            <BoxCommon gap='15px'>
                <BoxCommon>
                    <h5 className="fontW800">{text}</h5>
                </BoxCommon>
                <BoxCommon gap="20px" flexDirection="row">
                    <Image src={photoIcon} alt="" className="photo"/>
                    <BoxCommon>
                        <h4 className="fontW700">{company}</h4>
                        <h5>{name}</h5>
                    </BoxCommon>
                </BoxCommon>
            </BoxCommon>
        </Main>
    )
}