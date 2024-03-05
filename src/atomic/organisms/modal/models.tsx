import { SetVoid } from "~/types/set"
import { ChildrenType } from "~/types/variables"

export interface IndexProps {
    title: string
    isVisible: boolean
    children: ChildrenType
    onClose: SetVoid
}