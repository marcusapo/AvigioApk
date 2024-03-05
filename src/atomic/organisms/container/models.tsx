import { ReactNode } from "react";
import { PageType } from "@typing/variables";

export interface IndexProps {
    title: string
    children: ReactNode | ReactNode[]
    pageCurrent: PageType
    noGradient?: boolean
    isFooter?: boolean
}

export type IndexStyledProps = {
    noGradient: boolean
}