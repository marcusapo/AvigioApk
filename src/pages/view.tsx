
import { Container } from "@atomic/organisms";
import { Box, BoxCommon, Button, Input } from "@atomic/atoms";

import { ViewProps } from "./models";
import { Header } from "~/atomic/molecules";
import { Comments } from "~/atomic/atoms/comments";
import { Page } from "~/atomic/atoms/page";
import { SeeMore } from "~/atomic/atoms/seeMore";
import { Infos } from "~/atomic/atoms/infos";
import { NavigateNext } from "@mui/icons-material";

const View: React.FC<ViewProps> = ({

}) => (
    <Container pageCurrent="/home" title="Home - Avígio">
        <Header/>
        <BoxCommon 
            mt='15%' 
            gap="10%"
            height="100%"
        >
            <BoxCommon width="100%" height="60%">
                <Page>
                    <BoxCommon
                        width="90%"
                        height="100%"
                    >
                        <BoxCommon 
                            width="90%" 
                            height="50%"
                            ml='5%'
                            flexDirection="row" 
                            justifyContent="space-between"
                        >
                            eaeee
                            <Comments 
                                company="Ceo Teturlias Libras" 
                                name="Carlos Christian" 
                                text="”Lorem ipsum dolor sit amet, consectetur adipiscing.”"
                            />
                            <BoxCommon alignItems="center" gap="15px">
                                <h1 className="fontCenter fontW700">Descubra sua <br /> nova forma <br /> de fazer negócio</h1>
                                <SeeMore text="Saiba como" type="normal"/>
                            </BoxCommon>
                             <Comments 
                                company="Ceo Teturlias Libras" 
                                name="Carlos Christian" 
                                text="”Lorem ipsum dolor sit amet, consectetur adipiscing.”"
                            />
                        </BoxCommon>
                        <BoxCommon width="100%" height="50%" flexDirection="row" justifyContent="space-between">
                            <Comments 
                                company="Ceo Teturlias Libras" 
                                name="Carlos Christian" 
                                text="”Lorem ipsum dolor sit amet, consectetur adipiscing.”"
                            />
                             <Comments 
                                company="Ceo Teturlias Libras" 
                                name="Carlos Christian" 
                                text="”Lorem ipsum dolor sit amet, consectetur adipiscing.”"
                            />
                        </BoxCommon>
                        <BoxCommon className="backgroundRound">

                        </BoxCommon>
                    </BoxCommon>
                </Page>
            </BoxCommon>
            <BoxCommon 
                width="100%" 
                height="100%" 
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Page>
                    <h1 className="fontW800 fontCenter">
                        Solucionando sua vida <br />
                        de <b className="fontGradient">Pixel </b> 
                        em pixel.
                    </h1>
                    <BoxCommon 
                        width="90%" 
                        mt='10%'
                        flexDirection="row" 
                        justifyContent="space-between"
                    >
                        <Infos service="Aplicativos" text="Ter sua empresa bla bla bla bla bla blaaa" number='01.'/>
                        <Infos service="Aplicativos" text="Ter sua empresa bla bla bla bla bla blaaa" number='02.'/>
                        <Infos service="Aplicativos" text="Ter sua empresa bla bla bla bla bla blaaa" number='03.'/>
                    </BoxCommon>
                    <BoxCommon 
                        width="90%" 
                        mt='10%'
                        flexDirection="row" 
                        justifyContent="space-between"
                    >
                        <Infos service="Aplicativos" text="Ter sua empresa bla bla bla bla bla blaaa" number='04.'/>
                        <Infos service="Aplicativos" text="Ter sua empresa bla bla bla bla bla blaaa" number='05.'/>
                        <Infos service="Aplicativos" text="Ter sua empresa bla bla bla bla bla blaaa" number='06.'/>
                    </BoxCommon>
                </Page>
            </BoxCommon>
            <BoxCommon 
                width="100%" 
                height="100%" 
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Page>
                    <BoxCommon gap="5px" alignItems="center">
                        <h1 className="fontW800">Com grandes produtos... <br /> Surgem <b className="fontW900 fontGradient">grandes poderes.</b> </h1>
                        <SeeMore text="Acredite Vendo"/>
                    </BoxCommon>
                    <BoxCommon className="backgroundSmoke">

                    </BoxCommon>
                </Page>
            </BoxCommon>
            <BoxCommon 
                width="100%" 
                height="100%" 
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Page>
                    <BoxCommon 
                        flexDirection="row" 
                        width="95%"
                        justifyContent="space-between"
                    >
                            <BoxCommon alignItems="center">
                                <h1>Foto de monitor</h1>
                                <BoxCommon flexDirection="row" gap="8px">
                                    <Button
                                        onClick={() => null}
                                        color="greyLight"
                                        size="medium"
                                        text="Fiscal"
                                    />
                                    <Button 
                                        onClick={() => null}
                                        color="greyLight"
                                        size="medium"
                                        text="Estoque"
                                    />
                                     <Button 
                                        onClick={() => null}
                                        color="greyLight"
                                        size="medium"
                                        text="Financeiro"
                                    />
                                     <Button 
                                        onClick={() => null}
                                        color="greyLight"
                                        size="medium"
                                        text="Vendas"
                                    />
                                </BoxCommon>
                            </BoxCommon>
                            <BoxCommon flexDirection="column" alignItems="flex-end" gap="10px">
                                <h1 className="fontW700">Dê asas para sua empresa.</h1>
                                <h4 className="fontEnd fontGray fontW600">
                                    Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.
                                    Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s
                                    when an <br /> unknown printer took a galley of type and scrambled it to <br /> make a type specimen book.
                                    It has survived not only five <br /> centuries, but <br /> also the leap into electronic typesetting, <br /> remaining essentially unchanged.
                                    It was popularised in the <br /> 1960s with the release of Letraset sheets containing Lorem <br /> Ipsum passages,
                                    and more recently with desktop publishing <br /> software like Aldus PageMaker including versions of Lorem <br /> Ipsum.
                                </h4>
                                <BoxCommon flexDirection="row" alignItems="center">
                                    <h4 className="fontBlue fontW700">Saiba mais sobre o <b className="fontGradient">PixeIOS</b></h4>
                                    <NavigateNext color="primary"/>
                                </BoxCommon>
                            </BoxCommon>
                    </BoxCommon>
                </Page>
            </BoxCommon>
        </BoxCommon>
    </Container>
)

export default View;