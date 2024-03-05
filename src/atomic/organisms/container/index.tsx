import { Header } from "@atomic/molecules";
import { IndexProps } from "./models";
import { Footer, Main, Section } from "./style";
import Head from "next/head";
import { BoxCommon } from "~/atomic/atoms";

const Container: React.FC<IndexProps> = ({
  title,
  children,
  pageCurrent,
  noGradient,
  isFooter
}) => (
  <Main noGradient={!!noGradient}>
    <Head>
      <title>{title}</title>
    </Head>
    <Section>
        {children}
    </Section>
    {isFooter && (
        <Footer></Footer>
    )}
  </Main>
);

export default Container;
