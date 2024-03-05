import { BoxCommon, Touch } from "@atomic/atoms";
import { IndexProps } from "./models";
import { Line, Main, Option, RightNavigation, } from "./style";
import { Logo } from "./style";
import { useState } from "react";
import useMediaQuery from "~/hooks/useMediaQuery";
import Image from "next/image";
import LogoAvigio from '../../../assets/Avigio.png'

const pages = [
    {
        label: 'Soluções',
        name: '/home',
    },
    {
        label: 'Produtos',
        name: '/results',
    },
    {
        label: 'Quem usa',
        name: '/historic',
    },
    {
        label: 'Contato',
        name: '/manager',
    },
]

const Header: React.FC<IndexProps> = ({
    pageCurrent,
    navigateTo
}) => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false)

    return (
        <Main>
            <Logo onClick={() => navigateTo('/home')}>
                <Image src={LogoAvigio} alt="eae"/>
            </Logo>
            {
                pages?.map((item, index) => (
                    <BoxCommon alignItems="center" key={index}>
                        <Option
                            selected={pageCurrent === item.name}
                            href={item.name}
                        >
                            {item.label}
                        </Option>
                    </BoxCommon>
                ))
                }
            {
                useMediaQuery('(max-width: 1000px)') && (
                    <Touch onClick={() => setShowNavigation((state) => !state)}>
                        <BoxCommon gap='5px'>
                            <Line />
                            <Line />
                            <Line />
                        </BoxCommon>
                    </Touch>
                )
            }
            <RightNavigation showNavigation={showNavigation}>
                <BoxCommon
                    height='75px'
                    width='100%'
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <BoxCommon><></></BoxCommon>
                    <Touch onClick={() => setShowNavigation((state) => !state)}>
                        <BoxCommon gap='5px'>
                            <Line />
                            <Line />
                            <Line />
                        </BoxCommon>
                    </Touch>
                </BoxCommon>
                <BoxCommon
                    width='100%'
                    height="100%"
                    alignItems="center"
                    gap='40px'
                >
                    {
                        pages?.map((item, index) => (
                            <Option
                                selected={pageCurrent === item.name}
                                href={item.name}
                                key={index}
                                isWhite
                            >
                                { item.label }
                            </Option>
                        ))
                    }
                </BoxCommon>
            </RightNavigation>
        </Main>
    )
}

export default Header;