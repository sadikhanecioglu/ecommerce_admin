// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Button, InputProps, TextFieldProps, FormHelperText, Typography, useTheme, SxProps, Theme } from '@mui/material';

import { HTMLProps, useEffect, useState } from 'react';
import { Label } from '@mui/icons-material';
import SomsButton from '../pages-components/Buttons';
import { OverridableStringUnion } from '@mui/types';

// ----------------------------------------------------------------------

export type SomsRHFUploadProps = HTMLProps<HTMLInputElement> & {
    name: string;
    label?: string | undefined;
    onSelectFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
    color?: OverridableStringUnion<'primary' | 'secondary' | 'warning'>;
    sx?: SxProps<Theme>;
};

export default function SomsRHFUpload({ name, label, sx, color = 'primary', onSelectFile, ...other }: SomsRHFUploadProps) {
    const { control } = useFormContext();
    const [fileName, setFileName] = useState("")
    const theme = useTheme();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) =>
            (
                <div>

                    <Button

                        variant="contained"
                        component="label"
                        sx={{
                            py: 1,
                            px: 2,
                            backgroundColor: theme.palette[color].main,
                            color: theme.palette.common.white,
                            border: '1px solid #DADBF4',
                            borderRadius: 1,
                            '&:hover': { backgroundColor: theme.palette[color].light }, ...sx
                        }}
                    >
                        {label ?? 'Upload File'}
                        <input {...field}
                            type="file"
                            onChange={(e) => {

                                if (e.target.files) {
                                    setFileName(e.target.files.length > 0 ? e.target.files[0].name : '')
                                }
                                if (onSelectFile)
                                    onSelectFile(e)

                            }}
                            hidden
                            {...other}
                        />
                    </Button>
                    <Typography variant='body2'>{fileName}</Typography>

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
