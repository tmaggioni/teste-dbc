import { TitleStyle } from "./style"

interface TitleProps {
    children: React.ReactNode
}

export const Title = ({children} : TitleProps) => {
    return(
        <TitleStyle>
           {children}
        </TitleStyle>
    )
}