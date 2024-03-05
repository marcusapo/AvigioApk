import { PageType } from "@typing/variables"
import { SetPage } from "~/types/set";

export interface IndexProps {
    pageCurrent?: PageType
    navigateTo?: SetPage
}

export type OptionStyledProps = {
    selected: boolean;
    isWhite?: boolean
}

export type NavigationStyledProps = {
    showNavigation: boolean
}