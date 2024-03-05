import Link from "next/link"

import { BoxCommon, Icon } from "@atomic/atoms"

import WhatsAppIcon from '@assets/icons/whatsapp.png'

import { IndexProps, StatusType } from "./models"
import { Line, Main, Status, WhatsApp } from "./style"
import useMediaQuery from "~/hooks/useMediaQuery"

const Table: React.FC<IndexProps> = ({
    columns,
    data,
    selectedItem,
    onSelectItem,
    onDoubleClick,
    onClick,
}) => (
    <Main>
        <BoxCommon width={useMediaQuery('(max-width: 800px)') ? '900px' : '100%'} flexDirection="row" mb='10px'>
            {
                columns?.map((item, index) => (
                    <BoxCommon
                        flex={item.size}
                        justifyContent="center"
                        alignItems={item.align}
                        key={index}
                        pl='15px'
                    >
                        <h5 className={`fontW${item.weight} fontCenter fontGray`}>{ String(item.label) }</h5>
                    </BoxCommon>
                ))
            }
        </BoxCommon>
        {
            data?.map((row, index) => (
                <Line
                    selected={row.id === selectedItem}
                    onClick={() => onClick && onClick(row.id)}
                    onDoubleClick={() => onDoubleClick(row.id)}
                    key={index}
                >
                    {
                        row.data?.map((item, index) => (
                            <BoxCommon
                                flex={item.size}
                                justifyContent="center"
                                alignItems={item.align}
                                onClick={item.onClick && item.onClick}
                                key={index}
                            >
                                {
                                    item.type === 'whatsapp' ? (
                                        <Link
                                            href={`https://api.whatsapp.com/send?phone=55${item.label}`}
                                            target="_blank"
                                        >
                                            <WhatsApp src={WhatsAppIcon} alt='whatsapp' />
                                        </Link>
                                    ) : item.type === 'status' ? (
                                        <Status status={item.label as StatusType} />
                                    ) : item.type === 'edit' ? (
                                        <Icon
                                            name='edit'
                                            size={20}
                                            fill='secundary'
                                            stroke="secundary"
                                        />
                                    ) : item.type === 'history' ? (
                                        <Icon
                                            name='paper'
                                            size={20}
                                            fill='secundary'
                                            stroke="secundary"
                                        />
                                    ) : item.type === 'print' ? (
                                        <Icon
                                            name='print'
                                            size={20}
                                            fill='transparent'
                                            stroke="secundary"
                                        />
                                    ) : (
                                        <h6 className={`fontW${item.weight} font${item.color}`}>{ item.label }</h6>
                                    )
                                }
                            </BoxCommon>
                        ))
                    }
                </Line>
            ))
        }
    </Main>
)

export default Table