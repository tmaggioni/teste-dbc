
import { InputHTMLAttributes } from "react";
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';

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