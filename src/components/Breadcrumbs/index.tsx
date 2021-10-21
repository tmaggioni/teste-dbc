import { BreadcrumbStyle } from "./style"


interface BreadcrumbsProps {
    children: React.ReactNode
}

export const Breadcrumbs = ({children} : BreadcrumbsProps) => {
    return(
        <BreadcrumbStyle>
           {children}
        </BreadcrumbStyle>
    )
}