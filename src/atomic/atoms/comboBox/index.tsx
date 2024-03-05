import { BoxCommon, Icon } from ".."
import { IndexProps } from "./models"
import { Main } from "./style"

const ComboBox: React.FC<IndexProps> = ({
    label,
    showLabel,
    size,
    options,
    onChange,
    defaultOption,
    selected,
    text,
    noAsterisk='*',
}) => {

    return (
        <BoxCommon width={size === '100%' ? '100%' : 'max-content'}>
            { text && <h5 className="fontW600 fontNoBreak" style={{ marginBottom: 5 }}> { text } { noAsterisk } </h5> }
            { showLabel && <h5 className="fontW600 fontNoBreak" style={{ marginBottom: 5 }}>{ label }</h5> }
            {/* @ts-ignore */}
            <Main size={size} onChange={(event) => onChange(event.target.value)}>
                <BoxCommon>
                    <h6 className="fontGray">{ !showLabel ? label : 'Selecione' }</h6>
                </BoxCommon>
                <Icon
                    name="arrow"
                    fill="transparent"
                    stroke="secundary"
                    size={15}
                    rotate="90deg"
                />
                {
                    defaultOption && (
                        <option disabled selected>Selecione</option>
                    )
                }
                {
                    options && options.map((item, index) => (
                        <option value={item.value} key={index} selected={selected === index}>{ item.label }</option>
                    ))
                }
            </Main>
        </BoxCommon>
    )
}

export default ComboBox