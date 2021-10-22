import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


interface ISelectOption {
    label: string;
    value: string | number;
}

interface SelectFieldPropps {
    label: string;
    value?: string | number;
    options: Array<ISelectOption>;
    onChangeCallback(value: any): void;
    variant:"standard" | "outlined" | "filled" | undefined;
}

export const SelectField = ({ label, value,options,onChangeCallback,variant }: SelectFieldPropps) => {
    return (
        <FormControl fullWidth variant={variant}>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={value}
                onChange={(e: any) => {
                    onChangeCallback(e.target.value);
                }}>

                {options.map((option : ISelectOption, index:number) => {
                    return (
                        <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                    )
                })}

            </Select>
        </FormControl>
    )
}