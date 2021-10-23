
import { InputHTMLAttributes } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface DateFieldProps {
    label: string;
    value?: string | Date | null; 
    onChangeCallback(value: string): any;
} 

export const DateField = ({label, value, onChangeCallback }: DateFieldProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label={label}
                  value={value}
                  onChange={(newValue : any) => {
                    onChangeCallback(newValue)
                  }}
                  inputFormat="dd/MM/yyyy"
                  renderInput={(params) => <TextField variant="standard" {...params} />}
                />
        </LocalizationProvider>
    )
}