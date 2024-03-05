import React from "react";
import BoxCommon from "../boxCommon";
import { IndexProps } from "./models";
import { InputBox, TextInput } from "./style";

const TextArea: React.FC<IndexProps> = ({
    value,
    onChangeText,
    label,
    placeholder,
    color,
    id,
    size,
    mt,
    ml,
    mr,
    mb
}) => (
    <BoxCommon width={size} mt={mt} ml={ml} mr={mr} mb={mb}>
        { label && <h5 className="fontW600" style={{ marginBottom: 5 }}>{ label }</h5> }
        <InputBox size={size} color={color}>
            <TextInput
                value={value}
                onChange={e => onChangeText(e.target.value)}
                placeholder={placeholder ?? label}
                id={id}
            />
        </InputBox>
    </BoxCommon>
)

export default TextArea;