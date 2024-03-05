import { ChevronRight } from "@mui/icons-material"
import { BoxCommon } from ".."
import { IndexProps } from "./models"
import { Interaction, Main, Section } from "./style"

export const Infos: React.FC<IndexProps> = ({
    number,
    service,
    text,
}) => {
    return (
        <Main>
            <h2 className="fontW700">{number}</h2>
            <Section>
                 <h3>{service}</h3>
                 <h4>{text}</h4>
                 <Interaction>
                    <h4 className="fontW700">Saiba Mais</h4>
                    <ChevronRight/>
                 </Interaction>
            </Section>
        </Main>
    )
}