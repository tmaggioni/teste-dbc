import { InputHTMLAttributes } from "react";
import TextField from '@mui/material/TextField';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'number' | 'tel' | 'email';
    label: string;
    value?: string | number; 
    onChangeCallback(value: string): any;
}

export const InputField = ({type, label, value, onChangeCallback }: InputFieldProps) => {
    return (
        <TextField
            fullWidth
            type={type}
            label={label}
            value={value}
            variant="standard"
            onChange={(e: any) => {
                onChangeCallback(e.target.value)
            }} />
    )
}