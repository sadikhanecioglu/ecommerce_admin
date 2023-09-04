// @mui
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// ----------------------------------------------------------------------

const INPUT_WIDTH = 160;

type Props = {
    filterEndDate: Date | null;
    filterStartDate: Date | null;
    onFilterStartDate: (valu: Date | null) => void;
    onFilterEndDate: (valu: Date | null) => void;
};

export default function ToolbarDatepicker({
    filterEndDate,
    filterStartDate,
    onFilterEndDate,
    onFilterStartDate,
}: Props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Start date"
                value={filterStartDate}
                onChange={onFilterStartDate}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        fullWidth
                        sx={{
                            maxWidth: { md: INPUT_WIDTH },
                        }}
                    />
                )}
            />

            <DatePicker
                label="End date"
                value={filterEndDate}
                onChange={onFilterEndDate}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        fullWidth
                        sx={{
                            maxWidth: { md: INPUT_WIDTH },
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
