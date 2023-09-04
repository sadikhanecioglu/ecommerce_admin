// @mui
import { MenuItem, styled, SxProps, TextField } from '@mui/material';
// components
// ----------------------------------------------------------------------

const StyledTextFiled = styled(TextField)(({theme}) => ({

    '& label.Mui-focused': {
        color: theme.palette.primary.system.border,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.system.border,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.primary.system.border,
        },
        '&:hover fieldset': {
          borderColor: theme.palette.primary.system.border,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.system.border,
        },
      },

}))

const INPUT_WIDTH = 160;

type Props = {
    selectedValue: string;
    placeHolder: string;
    options: any[];
    labelField: string;
    valueField: string;
    onFilter: (even: React.ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps;
    sxOption?: SxProps;
};

export default function ToolbarDropdown({
    selectedValue,
    placeHolder,
    options,
    labelField,
    valueField,
    onFilter,
    sx,
    sxOption
}: Props) {

    return (
        <StyledTextFiled
            fullWidth
            select
            label={placeHolder}
            value={selectedValue}
            onChange={onFilter}
            SelectProps={{
                MenuProps: {
                    PaperProps: {
                        sx: { maxHeight: 220 },
                    },
                },
            }}
            sx={{
                maxWidth: { md: INPUT_WIDTH },
                textTransform: 'capitalize',
                ...sx
            }}
        >
            {options.map((option, i) => (
                <MenuItem
                    key={i}
                    value={option[valueField]}
                    sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 0.75,
                        typography: 'body2',
                        textTransform: 'capitalize',
                        '&:first-of-type': { mt: 0 },
                        '&:last-of-type': { mb: 0 },
                        ...sxOption
                    }}
                >
                    {option[labelField]}
                </MenuItem>
            ))}
        </StyledTextFiled>
    );
}
