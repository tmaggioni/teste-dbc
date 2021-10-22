import styled from 'styled-components'

interface CustomButtonProps {
    bgColor?: string;
    color?: string;
    border?: string
}

export const CustomButtonStyle = styled.button<CustomButtonProps>`
    display:flex;
    align-items:center;
    padding:5px 10px;
    border-radius:10px;
    background:${(props) => props.bgColor ?? 'transparent'};
    color:${(props) => props.color ?? 'pink'};
    border:0;
    border:1px solid ${(props) => props.border ?? 'transparent'};
    cursor:pointer;
    white-space: nowrap;
    margin:0 5px;
    svg{
        margin-right:5px;
    }
`