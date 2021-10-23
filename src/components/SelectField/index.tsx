import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    select: {
        "& .MuiSvgIcon-root": {
          color: "var(--green)",
        },
      },
  });

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
    const classes = useStyles();
    return (
        <FormControl fullWidth variant={variant}>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={value}
                className={classes.select}
                IconComponent = {KeyboardArrowDownIcon}
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