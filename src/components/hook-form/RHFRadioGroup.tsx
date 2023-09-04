// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
    FormHelperText,
    TextField,
    TextFieldProps,
    FormControlLabel,
    Radio,
    RadioGroup,
    ToggleButtonGroupProps,
    RadioGroupProps, Button, Box, Grid, Stack
} from '@mui/material';
import Iconify from '../iconify';
import { useEffect, useState } from 'react';
import {useTheme} from "@mui/material/styles";

// ----------------------------------------------------------------------

type Props = RadioGroupProps & {
    name: string;
    options: any;
};

export default function RHFRadioGroup({ name, options, ...other }: Props) {
    const { control } = useFormContext();
    const [alignment, setAlignment] = useState<string | null>('left');
    const theme = useTheme();
    const handleAlignment = (
        event: React.ChangeEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    useEffect(() => {
        setAlignment(alignment);
    }, [alignment, setAlignment]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) =>
            (
                <div>
                    <RadioGroup
                        {...field}
                        row
                        onChange={(
                            event: React.ChangeEvent<HTMLElement>,
                            value: string | null,
                        ) => { field.onChange(value) }}
                        value={field.value}
                        aria-label="text alignment"
                        {...other}
                        sx={{justifyContent: "flex-start"}}
                    >
                        {options.map((option: any) => (
                            <Box key={option.value} sx={{border: 1, borderColor: theme.palette.primary.grey[100], borderRadius: 1, py: .75, px: 1.5,ml:1,mt:1}}>
                                <FormControlLabel
                                    value={option.value}
                                    label={option.label}
                                    control={<Radio sx={{color: theme.palette.primary.grey[100]}} />}
                                    sx={{color: theme.palette.primary.grey[900]}}
                                />
                            </Box>
                        ))}
                    </RadioGroup>
                    {!!error && (
                        <FormHelperText error sx={{ px: 2 }}>
                            {error.message}
                        </FormHelperText>
                    )}
                </div>
            )}

        />
    );
}
