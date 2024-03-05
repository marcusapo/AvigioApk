import React from "react";
import BoxCommon from "../boxCommon";
import { IndexProps } from "./models";
import { InputBox, TextInput } from "./style";

const Input: React.FC<IndexProps> = ({
    value,
    onChangeText,
    label,
    placeholder,
    type = 'text',
    actionButton,
    autoFocus,
    onFocus,
    onBlur,
    max,
    color,
    min,
    id,
    size,
    options,
    list,
    disabled,
    mt,
    ml,
    mr,
    mb,
    className,
    style
}) => (
    <BoxCommon width={size}>
        { label && <h5 className="fontW600 fontNoBreak" style={{ marginBottom: 5 }}>{ label }</h5> }
        <InputBox size={size} color={color} mt={mt} ml={ml} mr={mr} mb={mb}>
            <TextInput
                value={value}
                onChange={e => onChangeText(e.target.value)}
                placeholder={placeholder ?? label}
                type={type}
                autoFocus={autoFocus}
                onFocus={onFocus}
                onBlur={onBlur}
                max={max}
                min={min}
                id={id}
                list={list}
                disabled={disabled}
                className={className}
                style={style}
            />
            {
                options && (
                    <datalist id={list}>
                        {
                            options.map((item, index) => (
                                <option
                                    value={item.value}
                                    key={index}
                                >
                                    { item.label }
                                </option>
                            ))
                        }
                    </datalist>
                )
            }
        </InputBox>
    </BoxCommon>
)

export default Input;