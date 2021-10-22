import { CustomButtonStyle } from './style'
interface CustomButtonProps {
    label: string;
    icon?: React.ReactNode
    color?: string;
    bgColor?: string;
    border?: string;
    eventCallback?: any;
}

export const CustomButton = ({ label, icon, color, bgColor, border, eventCallback }: CustomButtonProps) => {
    return (
        <CustomButtonStyle
            bgColor={bgColor}
            color={color}
            border={border}
            onClick={eventCallback}
        >
            {icon && icon}
            {label}
        </CustomButtonStyle>
    )
}