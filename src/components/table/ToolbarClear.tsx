// @mui
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
// ----------------------------------------------------------------------

type Props = {
  isFiltered: boolean;
  onResetFilter: VoidFunction;
};

export default function ToolbarClear({
  isFiltered,
  onResetFilter,
}: Props) {

  return (
      <>
          {isFiltered && (
              <Button
                  color="error"
                  sx={{ flexShrink: 0 }}
                  onClick={onResetFilter}
                  startIcon={<Iconify icon="eva:trash-2-outline" />}
              >
                  Clear
              </Button>
          )}
      </>
  );
}
