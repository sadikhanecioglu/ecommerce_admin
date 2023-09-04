// @mui
import { Stack, InputAdornment, TextField, MenuItem, Button, TextFieldProps } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  filterName: string;
  onFilterName: (even: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ToolbarSearch({
  filterName,
  onFilterName,
  ...other
}: Props) {

  return (
      <TextField
          fullWidth
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                      <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                  </InputAdornment>
              ),
          }}
          {...other}
      />
  );
}
