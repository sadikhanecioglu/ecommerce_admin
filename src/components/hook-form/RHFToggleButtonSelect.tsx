// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText, TextField, TextFieldProps, ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, ToggleButtonProps } from '@mui/material';
import Iconify from '../iconify';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

type Props = ToggleButtonGroupProps & {
    name: string;
    options: any;
};

export default function RHFToggleButtonSelect({ name, options, ...other }: Props) {
    const { control } = useFormContext();
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
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
                        <ToggleButtonGroup
                            {...field}

                            exclusive
                            onChange={(
                                event: React.MouseEvent<HTMLElement>,
                                value: string | null,
                            ) => { field.onChange(value) }}
                            value={field.value}
                            aria-label="text alignment"
                            {...other}
                        >

                            {options.map((option: any, index: number) => (
                                <ToggleButton
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.icon && (<Iconify
                                        icon={option.icon}
                                        width={16}

                                    ></Iconify>)}

                                    {option.label}
                                </ToggleButton>

                            ))}


                        </ToggleButtonGroup>
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
